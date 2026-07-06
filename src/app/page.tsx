import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Diagnostico from "@/components/sections/Diagnostico";
import Plans from "@/components/sections/Plans";
import Process from "@/components/sections/Process";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Diagnostico />
      <Plans />
      <Process />
      <PortfolioPreview />
      <About />
      <FAQ />
      <FinalCTA />
    </>
  );
}
