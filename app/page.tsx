import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Features from "@/components/blogs/Features";
import FooterSubscribe from "@/components/blogs/FooterSubscribe";
import Index from "@/components/blogs/content/Index";

export default function Home() {
  return (
    <main className="">
      <div className='bg-white'>
        <Navigation />
        <HeroSection />
        <Features />
        <Index />
        <FooterSubscribe />
        <Footer />
      </div>
    </main>
  );
}
