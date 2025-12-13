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
  // Optional: Local state to show immediate UI feedback before fetch completes
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
      setCurrentStatus("approved"); // Immediate visual feedback
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
      setCurrentStatus("disapproved"); // Immediate visual feedback
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

  // Helper to determine badge color based on status
  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s === "approved" || s === "published")
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]";
    if (s === "disapproved" || s === "rejected")
      return "bg-red-500/10 text-red-400 border-red-500/20";
    return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  };

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors duration-300"
    >
      {/* Status Column */}
      <td className="py-6 px-6 text-center align-middle">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${getStatusColor(
            currentStatus
          )}`}
        >
          {currentStatus}
        </span>
      </td>

      {/* Date Column */}
      <td className="py-6 px-6 text-center text-sm text-zinc-500 align-middle">
        {new Date(blog.createdAt).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </td>

      {/* Title Column */}
      <td className="py-6 px-6 text-center align-middle">
        <p className="text-white font-medium text-sm line-clamp-1 max-w-[250px] mx-auto group-hover:text-emerald-400 transition-colors">
          {blog.title}
        </p>
      </td>

      {/* Actions Column */}
      <td className="py-6 px-6 text-center align-middle">
        <div className="flex items-center justify-center gap-2">
          {/* Approve Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleApprove(blog._id)}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/50 hover:bg-emerald-500 hover:text-black transition-all duration-300"
            title="Approve"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.button>

          {/* Disapprove Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDisapprove(blog._id)}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-red-500/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300"
            title="Disapprove"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </div>
      </td>
    </motion.tr>
  );
};

export default Admin;