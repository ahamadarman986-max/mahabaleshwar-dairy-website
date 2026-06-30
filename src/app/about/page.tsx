import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import FarmToBottle from "@/components/FarmToBottle";
import VideoSection from "@/components/VideoSection";

export default function BrandStoryPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-20">
      <About />
      <WhyChooseUs />
      <FarmToBottle />
      <VideoSection />
    </main>
  );
}
