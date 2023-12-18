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
  
            <div className="w-full relative pt-24">
                {/* Fixed image in the center */}
                <div className="sticky w-full m-auto h-screen top-[20%] overflow-hidden">
                    <div className="relative m-auto w-[80%] h-2/3 justify-center ">
                        <Image className="rounded-xl bg-cover m-auto" src={getImage(currentImage)} alt="Hero Image" placeholder = "blur" priority={false} />
                    </div>
                </div>
                {/* step text */}
                <div className="flex flex-col w-full">
                    <div id="first-card" className="w-80 self-end z-10 mr-20 mb-[60vh] bg-red-500 p-8 rounded-lg">
                        <p>n 2021, sharing content is easier than ever. Our lingua franca is visual: memes, infographics, TikToks. Our references cross borders and platforms, shared and remixed a hundred different ways in minutes. Digital culture is collective by default and has us 😂, 😭, and 😍 together all around the world.</p>
                    </div>
                     <div id="second-card" className="w-80 self-end z-10 mr-20 mb-[60vh] bg-red-500 p-8 rounded-lg">
                        <p>n 2021, sharing content is easier than ever. Our lingua franca is visual: memes, infographics, TikToks. Our references cross borders and platforms, shared and remixed a hundred different ways in minutes. Digital culture is collective by default and has us 😂, 😭, and 😍 together all around the world.</p>
                    </div>
                    <div id="third-card" className="w-80 self-end z-10 mr-20 mb-[60vh] bg-red-500 p-8 rounded-lg">
                        <p>n 2021, sharing content is easier than ever. Our lingua franca is visual: memes, infographics, TikToks. Our references cross borders and platforms, shared and remixed a hundred different ways in minutes. Digital culture is collective by default and has us 😂, 😭, and 😍 together all around the world.</p>
                    </div>
                    <div className="w-80 self-end z-10 mr-20 mb-[60vh] bg-red-500 p-8 rounded-lg">
                        <p>n 2021, sharing content is easier than ever. Our lingua franca is visual: memes, infographics, TikToks. Our references cross borders and platforms, shared and remixed a hundred different ways in minutes. Digital culture is collective by default and has us 😂, 😭, and 😍 together all around the world.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
