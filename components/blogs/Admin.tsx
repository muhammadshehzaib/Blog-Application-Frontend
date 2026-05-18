import React, { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { motion } from "framer-motion";

interface BlogProps {
  blog: {
    _id: string;
    status: string;
    createdAt: string;
    title: string;
  };
}

const Admin: React.FC<BlogProps> = ({ blog }) => {
  const { token } = useAuth();
  const [isStatusUpdated, setStatusUpdated] = useState(false);
  // Local state to show immediate UI feedback before fetch completes
  const [currentStatus, setCurrentStatus] = useState(blog.status);

  const handleApprove = async (_id: string) => {
    try {
      await fetch(`${process.env.DEPLOYMENTLINK}/blogs/approved/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
      });

      console.log(`Blog approved`);
      setStatusUpdated(true);
      setCurrentStatus("approved");
    } catch (error) {
      console.error("Error approving blog:", error);
    }
  };

  const handleDisapprove = async (_id: string) => {
    try {
      await fetch(`${process.env.DEPLOYMENTLINK}/blogs/disapproved/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
      });

      console.log(`Blog disapproved`);
      setStatusUpdated(true);
      setCurrentStatus("disapproved");
    } catch (error) {
      console.error("Error disapproving blog:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(`${process.env.DEPLOYMENTLINK}/blogs/${blog._id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch updated data");
            }
            return response.json();
          })
          .then((updatedData) => {
            console.log("Updated data:", updatedData);
            if (updatedData.status) setCurrentStatus(updatedData.status);
          });

        setStatusUpdated(false);
      } catch (error) {
        console.error("Error fetching updated data:", error);
      }
    };

    if (isStatusUpdated) {
      fetchData();
    }
  }, [isStatusUpdated, blog._id, token]);

  const statusGlyph = (status: string) => {
    const s = status.toLowerCase();
    if (s === "approved" || s === "published") return "●";
    if (s === "disapproved" || s === "rejected") return "×";
    return "◦";
  };

  const statusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s === "approved" || s === "published") return "text-accent";
    if (s === "disapproved" || s === "rejected") return "text-paper-3";
    return "text-paper-2";
  };

  return (
    <motion.tr
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group border-t border-rule hover:bg-ink-2 transition-colors duration-200"
    >
      {/* Status */}
      <td className="py-4 px-4 align-middle">
        <span
          className={`font-mono text-[0.7rem] tracking-label uppercase inline-flex items-center gap-2 ${statusColor(
            currentStatus
          )}`}
        >
          <span aria-hidden>{statusGlyph(currentStatus)}</span>
          <span>{currentStatus || "pending"}</span>
        </span>
      </td>

      {/* Date */}
      <td className="py-4 px-4 align-middle font-mono text-xs text-paper-3 whitespace-nowrap">
        {new Date(blog.createdAt).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </td>

      {/* Title */}
      <td className="py-4 px-4 align-middle">
        <p className="font-display text-paper text-base leading-snug line-clamp-1 max-w-[420px] group-hover:text-accent transition-colors">
          {blog.title}
        </p>
      </td>

      {/* Id (mono, tertiary) */}
      <td className="py-4 px-4 align-middle hidden md:table-cell font-mono text-[0.7rem] tracking-label text-paper-3 uppercase">
        #{blog._id.slice(-6)}
      </td>

      {/* Actions */}
      <td className="py-4 px-4 align-middle text-right">
        <div className="inline-flex items-center gap-1">
          <button
            onClick={() => handleApprove(blog._id)}
            className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 text-paper-2 hover:text-accent transition-colors duration-200"
            title="Approve"
          >
            <span className="font-mono text-[0.7rem] text-paper-3 group-hover/btn:text-accent">
              [
            </span>
            <span className="font-mono text-xs">approve</span>
            <span className="font-mono text-[0.7rem] text-paper-3 group-hover/btn:text-accent">
              ]
            </span>
          </button>
          <span className="text-rule font-mono text-xs">·</span>
          <button
            onClick={() => handleDisapprove(blog._id)}
            className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 text-paper-2 hover:text-paper transition-colors duration-200"
            title="Reject"
          >
            <span className="font-mono text-[0.7rem] text-paper-3 group-hover/btn:text-paper">
              [
            </span>
            <span className="font-mono text-xs">reject</span>
            <span className="font-mono text-[0.7rem] text-paper-3 group-hover/btn:text-paper">
              ]
            </span>
          </button>
        </div>
      </td>
    </motion.tr>
  );
};

export default Admin;
