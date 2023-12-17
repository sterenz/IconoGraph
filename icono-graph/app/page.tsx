import dynamic from "next/dynamic";
import BarChart from "@/components/BarChart";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";

const DynamicMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <BarChart />
      <DynamicMap />
    </main>
  )
}
