"use client";
import CommentsModeration from "@/components/admin/CommentsModeration";
import Navigation from "@/components/Navigation";

const Page = () => {
  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />
      <CommentsModeration />
    </main>
  );
};

export default Page;
