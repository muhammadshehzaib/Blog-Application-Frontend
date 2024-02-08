import React from "react";
import useAuth from "@/hooks/useAuth";

const Admin = ({ blog }) => {
  const { isAuthenticated, token } = useAuth();

  const handleApprove = async (_id: any) => {
    // Implement the logic to approve the blog with the given blogId
    const response = await fetch(
      `http://localhost:3002/blogs/approved/${blog._id}`,
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

  const handleDisapprove = async (_id: any) => {
    const response = await fetch(
      `http://localhost:3002/blogs/disapproved/${blog._id}`,
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
    <tr key={blog.id} className="even:bg-gray-50">
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
          onClick={() => handleApprove(blog.id)}
        >
          Approve
        </button>
        <button
          className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 ml-2"
          onClick={() => handleDisapprove(blog.id)}
        >
          Disapprove
        </button>
      </td>
    </tr>
  );
};

export default Admin;
