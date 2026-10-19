import HeroSection from "@/Components/HeroSection";
import RoomsDataFetch from "@/Components/RoomsDataFetch";
import StudyNookCTA from "@/Components/StudyNookCTA";
import StudyNookStats from "@/Components/StudyNookStats";
import Testimonials from "@/Components/Testimonials";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <HeroSection />
    <RoomsDataFetch />
    <WhyChooseUs />
    <StudyNookStats />
    <Testimonials />
    <StudyNookCTA />
   </>
  );
}
