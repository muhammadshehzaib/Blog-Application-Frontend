"use client";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export interface LiveComment {
  _id?: string;
  id?: string;
  comment: string;
}

export default function useBlogSocket(blogId: string | null) {
  const [liveComments, setLiveComments] = useState<LiveComment[]>([]);
  const [counts, setCounts] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    if (!blogId) return;

    const socket: Socket = io(process.env.DEPLOYMENTLINK as string, {
      transports: ["websocket"],
    });

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

    return () => {
      socket.disconnect();
    };
  }, [blogId]);

  return { liveComments, counts };
}
