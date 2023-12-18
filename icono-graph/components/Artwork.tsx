'use client'

import { useEffect, useState } from "react";
import Image from "next/image"
// import hero from "@/public/hero.jpg"
import hero1 from "@/public/hero1.jpg";
import hero2 from "@/public/hero2.jpg";
import hero3 from "@/public/hero3.jpg";

export default function Artwork() {

    const [currentImage, setCurrentImage] = useState<number>(1);

    useEffect(() => {
        const handleScroll = () => {
        const secondCard = document.getElementById("second-card");
        if (secondCard) {
            const rect = secondCard.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            if (isVisible && currentImage !== 2) {
            setCurrentImage(2);
            } else if (!isVisible && currentImage !== 1) {
            setCurrentImage(1);
            }
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [currentImage]);

    const getImage = (imageNumber: number) => {
        switch (imageNumber) {
        case 1:
            return hero1;
        case 2:
            return hero2;
        case 3:
            return hero3;
        default:
            return hero1;
        }
    };

    return (
        <section id="scrolly-side" className="animate-fade-in-down w-full m-auto">
            <article className="max-w-7xl m-auto">
                <div className="p-8 md:p-12 col-span-12 lg:col-span-7 grid transition-all">
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 pb-2">
                        <div>
                            <h1 className="
                                        font-bold
                                        font-display
                                        text-4xl
                                        lg:text-5xl
                                        text-emerald-400
                            ">
                                Description of an Artwork
                            </h1>
                            <h2  className="
                                        font-mono
                                        text-2xl
                                        md:text-3xl
                                        text-emerald-400
                            ">
                                an example
                            </h2>
                        </div>
                        <p className="
                                text-gray-50 font-sans text-lg
                        ">
                            To illustrate how merging data from two datasets can lead to different interpretations of an artwork and provide deeper insights, let's consider an example with more detailed information.
                        </p>
                    </div>
                </div>
            </article>
                <div className="w-full relative pt-12">
                {/* Fixed image in the center */}
                <div className="sticky w-full m-auto h-screen top-[20%] overflow-hidden">
                    <div className="relative m-auto w-[80%] h-2/3 justify-center ">
                        <Image className="rounded-xl bg-cover m-auto" src={getImage(currentImage)} alt="Hero Image" placeholder = "blur" priority={false} />
                    </div>
                </div>
                {/* step text */}
                <div className="flex flex-col w-full">
                    <div id="first-card" className="w-80 self-end z-10 mr-20 mb-[60vh] bg-emerald-400 p-8 rounded-lg">
                        <p>Let's delve into an exquisite example of a shared artwork residing within both datasets, namely, <strong>'Sacred and Profane Love'</strong> created by the renowned artist, <strong>Tiziano Vecellio</strong>. This masterpiece stands as an epitome of enriched information amalgamated from both datasets, providing a comprehensive and intricate portrayal. We will explore intriguing details and enlightening data surrounding this artwork. </p>
                    </div>
                     <div id="" className="w-80 self-end z-10 mr-20 mb-[60vh] bg-emerald-400 p-8 rounded-lg">
                        <p>Original Title:</p><p className="pb-1"><strong>Amor sacro e Amor profano</strong></p>
                        <p>English Title:</p><p className="pb-1"><strong>Sacred and Profane Love</strong></p>                     
                        <p>Artist: Tiziano</p><p className="pb-1"><strong>Vecellio</strong></p>
                        <p>Year of creation:</p><p className="pb-1"><strong>1515</strong></p>
                        <p>Art movement:</p><p className="pb-1"><strong>Venetian High Renaissance</strong></p>
                        <p>Location:</p><p className="pb-1"><strong>Galleria Borghese, Rome, Italy</strong></p>
                        <p>Type:</p><p className="pb-1"><strong>Painting</strong></p>
                        <p>Size:</p><p className="pb-1"><strong>279x118</strong></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
