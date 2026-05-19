"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export interface LiveComment {
  _id?: string;
  id?: string;
  comment: string;
}

interface TypingPayload {
  userId: string;
  name: string;
}

const TYPING_TTL_MS = 3000;
const TYPING_THROTTLE_MS = 2000;

export default function useBlogSocket(
  blogId: string | null,
  token: string | null,
) {
  const [liveComments, setLiveComments] = useState<LiveComment[]>([]);
  const [counts, setCounts] = useState<Record<string, number> | null>(null);
  const [typingNames, setTypingNames] = useState<string[]>([]);

  const socketRef = useRef<Socket | null>(null);
  const typingTimersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map(),
  );
  const lastTypingSentRef = useRef<number>(0);

  useEffect(() => {
    if (!blogId || !token) return;

    const socket = io(process.env.DEPLOYMENTLINK as string, {
      transports: ["websocket"],
      auth: { token },
    });
    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("joinPost", blogId);
    });

    socket.on("commentCreated", (comment: LiveComment) => {
      setLiveComments((prev) => [...prev, comment]);
    });

    socket.on(
      "reactionUpdated",
      ({ counts }: { counts: Record<string, number> }) => {
        setCounts(counts);
      },
    );

    socket.on("userTyping", ({ name }: TypingPayload) => {
      const timers = typingTimersRef.current;
      const existing = timers.get(name);
      if (existing) clearTimeout(existing);

      setTypingNames((prev) => (prev.includes(name) ? prev : [...prev, name]));

      const timeoutId = setTimeout(() => {
        timers.delete(name);
        setTypingNames((prev) => prev.filter((n) => n !== name));
      }, TYPING_TTL_MS);
      timers.set(name, timeoutId);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
      typingTimersRef.current.forEach((t) => clearTimeout(t));
      typingTimersRef.current.clear();
    };
  }, [blogId, token]);

  const notifyTyping = useCallback(() => {
    if (!blogId || !socketRef.current) return;
    const now = Date.now();
    if (now - lastTypingSentRef.current < TYPING_THROTTLE_MS) return;
    lastTypingSentRef.current = now;
    socketRef.current.emit("typing", blogId);
  }, [blogId]);

  return { liveComments, counts, typingNames, notifyTyping };
}
