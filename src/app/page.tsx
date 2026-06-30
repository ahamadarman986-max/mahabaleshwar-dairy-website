import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Hero />
      <Trust />
      <Products />
      <Testimonials />
    </main>
  );
}
