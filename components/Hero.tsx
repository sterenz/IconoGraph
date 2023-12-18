import Image from "next/image"
import hero from "@/public/hero.jpg"

export default function Hero() {
    return (
        <section id="hero" className="pb-6 h-screen animate-fade-in-down">
            <article className="m-auto">
                <div className="flex bg-no-repeat bg-cover bg-center bg-fixed bg-hero-image h-screen min-w-screen before:content-['']
                before:absolute
                before:inset-0
                before:block
                before:bg-gradient-to-r
                before:from-slate-950
                before:to-emerald-900
                before:opacity-80
                before:backdrop-grayscale
                ">
                    <h3 className="absolute top-10 left-8 font-mono text-gray-50 tracking-wider">INFORMATION VIZUALIZATION PROJECT</h3>
                    <div className="transition-all absolute bottom-4 left-8">
                        <h1 className="font-bold text-8xl lg:text-9xl text-emerald-400 pb-8 ">
                            <span className="font-display font-thin italic">Icono</span>
                            <span className="font-mono font-normal">Graph</span>
                        </h1>
                        <p className="max-w-2xl text-gray-50 font-sans text-2xl pb-4">
                            How does exploring the iconography within the realm of art unveil new dimensions and amplify the narrative of artworks?
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}