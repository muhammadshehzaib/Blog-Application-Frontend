import ObservabilityDashboard from "@/components/admin/ObservabilityDashboard";
import Navigation from "@/components/Navigation";

const Page = () => {
  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />
      <ObservabilityDashboard />
    </main>
  );
};

export default Page;
