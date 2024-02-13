"use client";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Comments from "./Comments";

const BlogId = ({ blog }) => {
  const router = useRouter();
  const [comments, setComments] = useState();
  const { token } = useAuth();

  const [blogs, setBlogs] = useState();

  // console.log("This is blog : ", blog);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3002/blogs/${blog}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }
      setBlogs(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleComment = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ comment: comments, blog: blog }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Comment Failed:", errorData);
        return;
      }

      const responseData = await response.json();
      // console.log("responseData : ", responseData.comment);

      setComments("");

      console.log("Comment Successful:", responseData);
    } catch (error: any) {
      console.error("Comment Failed:", error.message);
    }
  };

  console.log({ comment: comments, blog: blog });

  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setComments(value);
  };
  useEffect(() => {
    fetchData();
    // handleComment()
  }, [comments]);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {blogs && (
        <>
          <img
            src={blogs.image}
            alt={blogs.title}
            className="rounded-md w-full h-64 object-cover mb-4"
          />
          <div className="text-2xl font-bold mb-2">{blogs.title}</div>
          <div className="mb-4">{blogs.content}</div>
        </>
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="flex mb-4">
          <input
            type="text"
            name=""
            id=""
            value={comments}
            onChange={handleInputChange}
            placeholder="Add a comment..."
            className="w-full px-4 py-2 border rounded-md mr-2"
          />
          <button
            onClick={handleComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
        {blogs?.comments.length !== 0 ? (
          <div>
            {blogs?.comments.map((comment) => (
              <Comments
                key={comment.id}
                comment={comment.comment}
                blogId={blog}
              />
            ))}
          </div>
        ) : (
          <div>No comments yet.</div>
        )}
      </div>
    </div>
  );
};

export default BlogId;
