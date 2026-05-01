import { Navbar } from "@/components/Navbar";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { WhoWeHelp } from "@/components/WhoWeHelp";
import { LandingSections } from "@/components/LandingSections";
import { StickyProcess } from "@/components/StickyProcess";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroScrollDemo />
      <WhoWeHelp />
      <LandingSections />
      <StickyProcess />
    </main>
  );
}