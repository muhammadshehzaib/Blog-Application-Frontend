"use client";
import BlogId from "@/components/blogs/BlogId";

const page = ({ params }: { params: { id: string } }) => {
  // console.log("This is params Id : ", params.id);

  return (
    <div>
      <BlogId blog={params.id} />
    </div>
  );
};

export default page;
