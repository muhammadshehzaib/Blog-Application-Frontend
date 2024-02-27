import React from "react";
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

  const handleApprove = async (_id: string) => {
    // Implement the logic to approve the blog with the given blogId
    const response = await fetch(
      `${process.env.LOCALHOST  || process.env.DEPLOYMENTLINK}/blogs/approved/${blog._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify(blog),
      }
    );
    console.log(`Blog ${response} approved`);
  };

  const handleDisapprove = async (_id: string) => {
    const response = await fetch(
      `${process.env.LOCALHOST  || process.env.DEPLOYMENTLINK}/blogs/disapproved/${blog._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify(blog),
      }
    );
    console.log(`Blog ${response} disapproved`);
  };

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
