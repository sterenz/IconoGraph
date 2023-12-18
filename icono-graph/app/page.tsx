import { Suspense } from 'react'
import dynamic from "next/dynamic";
import BarChart from "@/components/BarChart";
import Hero from "@/components/Hero";
import Datasets from "@/components/Datasets";
import Loading from './loading';
import Footer from '@/components/Footer';
import Background from '@/components/Background';
import Conclusions from '@/components/Conclusions';

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
      <Background />
      <Datasets />
      <Suspense fallback={<Loading />}>
        <BarChart />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <DynamicMap />
      </Suspense>
      <DynamicArtwork />
      <Conclusions />
      <Footer />
    </main>
  )
}
