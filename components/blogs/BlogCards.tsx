import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  if (blog.status !== "Approved") {
    return <div className="hidden" />;
  }

  const dateStr = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article
      key={`blog-cards-Simple${blog._id}`}
      onClick={() => router.push(`/blogs/${blog._id}`)}
      className="group cursor-pointer border border-rule bg-ink hover:bg-ink-2 transition-colors flex flex-col h-full rounded-none"
    >
      <div className="relative overflow-hidden border-b border-rule bg-ink-2">
        <Image
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-48 md:h-56"
          width={600}
          height={400}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4 font-mono text-[0.7rem] tracking-label uppercase text-paper-3">
          <span className="text-accent">●</span>
          <span>{blog.category?.category || "General"}</span>
          <span className="text-rule">·</span>
          <span>{dateStr}</span>
        </div>

        <h2 className="font-display text-paper text-[1.4rem] leading-tight tracking-tight mb-3 group-hover:text-accent transition-colors">
          {blog.title}
        </h2>

        <p className="text-paper-2 leading-relaxed text-sm line-clamp-3 mb-6">
          {blog.content}
        </p>

        <div className="mt-auto pt-4 border-t border-rule font-mono text-[0.7rem] tracking-label uppercase text-paper-3 flex items-center justify-between gap-3">
          <span>
            <span className="text-paper-3">by</span>{" "}
            <span className="text-paper-2">{blog.author}</span>
          </span>
          <span className="inline-flex items-center gap-1 text-paper-3 group-hover:text-accent transition-colors">
            <span>read</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCards;
