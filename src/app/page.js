import HeroSection from "@/Components/HeroSection";
import RoomsDataFetch from "@/Components/RoomsDataFetch";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <HeroSection></HeroSection>
    <RoomsDataFetch></RoomsDataFetch>
   </>
  );
}
