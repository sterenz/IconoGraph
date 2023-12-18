import { Suspense } from 'react'
import dynamic from "next/dynamic";
import BarChart from "@/components/BarChart";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Loading from './loading';
import Footer from '@/components/Footer';

const DynamicMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const DynamicArtwork = dynamic(() => import("@/components/Artwork"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Suspense fallback={<Loading />}>
        <BarChart />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <DynamicMap />
      </Suspense>
      <DynamicArtwork />
      <Footer />
    </main>
  )
}
