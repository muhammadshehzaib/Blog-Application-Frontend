import React, { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";

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
      setStatusUpdated(true); // Set the status update flag
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
      setStatusUpdated(true); // Set the status update flag
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
          });

        // Reset the status update flag
        setStatusUpdated(false);
      } catch (error) {
        console.error("Error fetching updated data:", error);
      }
    };

    if (isStatusUpdated) {
      fetchData(); // Fetch data when status is updated
    }
  }, [isStatusUpdated, blog._id, token]);

  return (
    <tr key={blog._id} className="even:bg-gray-50">
      <td className="py-2 px-4 border-b text-center">{blog.status}</td>
      <td className="py-2 px-4 border-b text-center">
        {" "}
        {new Date(blog.createdAt).toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
        })}
      </td>
      <td className="py-2 px-4 border-b text-center">{blog.title}</td>
      <td className="py-2 px-4 border-b text-center">
        <button
          className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
          onClick={() => handleApprove(blog._id)}
        >
          Approve
        </button>
        <button
          className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 ml-2"
          onClick={() => handleDisapprove(blog._id)}
        >
          Disapprove
        </button>
      </td>
    </tr>
  );
};

export default Admin;
