import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BlogId from "./BlogId";

interface Blog {
  _id: string;
  status: string;
  createdAt: string;
  title: string;
  image: string;
  content: string;
  author: string;
  category?: {
    category: string;
  };
  reactions?: {
    reaction: string;
  };
}

interface BlogCardsProps {
  blog: Blog;
}

const BlogCards: React.FC<BlogCardsProps> = ({ blog }) => {
  const router = useRouter();

  return (
    <div
      className={
        blog.status === "Approved" ? "mt-10 ml-3 cursor-pointer" : "hidden"
      }
    >
      <div>
        <div
          key={`bolg-cards-Simple${blog._id}`}
          className="card flex flex-col border rounded-md overflow-hidden shadow-md bg-white dark:bg-gray-800 xl:h-[450px] h-[500px]"
        >
          <div
            className="image relative cursor-pointer"
            onClick={() => router.push(`/blogs/${blog._id}`)}
          >
            <Image
              src={blog.image}
              alt="Blog Image"
              className="object-cover w-full h-40 md:h-52"
              width={300}
              height={300}
            />
          </div>
          <div className="card-body p-4 flex flex-col items-start w-full">
            <div className="userDetail flex">
              <p className="text-gray-500 font-medium text-xs">
                {new Date(blog.createdAt).toLocaleDateString(undefined, {
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="blogHeading pt-3">
              <h2 className="text-xl md:text-2xl font-bold">{blog.title}</h2>
            </div>
            <div className="blogParagraph mt-2">
              <p className="text-gray-600 font-medium text-sm">
                {blog.content}
              </p>
            </div>
            <div className="w-full mt-3">
              <hr className="border-t border-gray-300 dark:border-gray-700" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-gray-500 font-medium text-xs">
                  Author: {blog.author}
                </p>
                <p className="text-gray-500 font-medium text-xs">
                  Status: {blog.status}
                </p>
                <p className="text-gray-500 font-medium text-xs">
                  Category: {blog.category && blog.category.category}
                </p>
                <p>{blog.reactions && blog.reactions.reaction}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
