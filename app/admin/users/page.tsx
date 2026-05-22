"use client";
import UserRoles from "@/components/admin/UserRoles";
import Navigation from "@/components/Navigation";

const Page = () => {
  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />
      <UserRoles />
    </main>
  );
};

export default Page;
