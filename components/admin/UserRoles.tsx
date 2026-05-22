"use client";
import React, { useCallback, useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";

interface User {
  _id: string;
  username: string;
  email?: string;
  role: string;
}

const ROLES = ["Reader", "Writer", "Admin"];

const UserRoles: React.FC = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(`${process.env.DEPLOYMENTLINK}/auth/users`, {
        headers: { authorization: `bearer ${token}` },
      });
      if (!res.ok) throw new Error(`Failed to load users (${res.status})`);
      const data = await res.json();
      setUsers(Array.isArray(data) ? data : []);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const changeRole = async (id: string, role: string) => {
    setSavingId(id);
    setError(null);
    try {
      const res = await fetch(
        `${process.env.DEPLOYMENTLINK}/auth/users/${id}/role`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
          },
          body: JSON.stringify({ role }),
        },
      );
      if (!res.ok) throw new Error(`Role change failed (${res.status})`);
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, role } : u)),
      );
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSavingId(null);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-10 pt-16 pb-24">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
          §
        </span>
        <span className="label">User roles</span>
        <span className="flex-1 border-t border-rule translate-y-[-2px]" />
        <span className="font-mono text-paper-3 text-[0.7rem] tracking-label">
          {users.length} users
        </span>
      </div>

      {error && (
        <p className="font-mono text-xs text-red-400 mb-4">✗ {error}</p>
      )}

      {loading ? (
        <p className="font-mono text-sm text-paper-3 animate-pulse">
          › loading users…
        </p>
      ) : (
        <div className="border border-rule divide-y divide-rule">
          {users.map((u) => (
            <div
              key={u._id}
              className="flex items-center gap-4 p-4 hover:bg-ink-2 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-sans text-paper truncate">{u.username}</p>
                <p className="font-mono text-[0.65rem] tracking-label uppercase text-paper-3 mt-1">
                  {u.email || "no email"}
                </p>
              </div>
              <select
                value={u.role}
                disabled={savingId === u._id}
                onChange={(e) => changeRole(u._id, e.target.value)}
                className="bg-transparent border border-rule text-paper font-mono text-xs px-3 py-1.5 outline-none focus:border-accent disabled:opacity-50"
              >
                {ROLES.map((r) => (
                  <option key={r} value={r} className="bg-ink">
                    {r}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UserRoles;
