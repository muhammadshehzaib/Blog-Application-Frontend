"use client";
import EditBlog from "@/components/blogs/EditBlog";

const Page = ({ params }: { params: { id: string } }) => {
  return <EditBlog blogId={params.id} />;
};

export default Page;
