import React, { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Comments from "./Comments";
import Reactions from "./reactions/Reactions";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Image from "next/image";

interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string;
  reactions: { reactions: string }[];
  comments: { id: string; comment: string }[];
}

interface BlogIdProps {
  blog: string;
}

const BlogId: React.FC<BlogIdProps> = ({ blog }) => {
  const router = useRouter();
  const { token } = useAuth();
  const [comments, setComments] = useState<string>("");
  const [reactions, setReactions] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<Blog | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.DEPLOYMENTLINK}/blogs/${blog}`
      );
      const data: Blog = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }
      setBlogs(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.DEPLOYMENTLINK}/comments`, {
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
      setComments("");

      console.log("Comment Successful:", responseData);
    } catch (error: any) {
      console.error("Comment Failed:", error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setComments(value);
  };

  const handleReactionSelected = async (reaction: string) => {
    try {
      const response = await fetch(`${process.env.DEPLOYMENTLINK}/reactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ reactions: reaction, blogId: blog }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Reaction Failed:", errorData);
        return;
      }

      const responseData = await response.json();
      setReactions(responseData);

      console.log("Reaction Successful ", responseData);
    } catch (error: any) {
      console.error("Reaction Unsuccessful:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, );

  return (
    <>
      <Navigation />

      <div className="bg-white dark:bg-slate-900">
        <div className="max-w-2xl mx-auto h-screen dark:text-slate-100">
          {blogs && (
            <>
              <Image
                src={blogs.image}
                alt={blogs.title}
                width={300}
                height={200}
                className="rounded-md w-full h-64 object-cover mb-4"
              />
              <div className="text-2xl font-bold mb-2">{blogs.title}</div>
              <div className="mb-4">{blogs.content}</div>

              {blogs.reactions.length === 0 ? (
                <Reactions onReactionSelected={handleReactionSelected} />
              ) : (
                blogs.reactions.map((reaction) => (
                  <Reactions
                    key={reaction.reactions}
                    onReactionSelected={handleReactionSelected}
                  />
                ))
              )}
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
                className="w-full px-4 py-2 border rounded-md mr-2 dark:bg-slate-800 dark:text-slate-100"
              />
              <button
                onClick={handleComment}
                className="bg-blue-500 text-white px-4 py-2 rounded-md dark:bg-blue-700"
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
      </div>
      <Footer />
    </>
  );
};

export default BlogId;
