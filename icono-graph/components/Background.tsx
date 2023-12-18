import Link from "next/link";

export default function Background() {
    return (
        <section id="background" className="pt-72 animate-fade-in-down">
            <article className="max-w-7xl m-auto w-auto flex flex-col md:flex-row align-top py-20">
                <div className="w-2/6 flex animate-fade-in-down justify-center">
                    <h3 className="font-mono text-xl text-gray-50 uppercase">BACKGROUND AND GOAL</h3>
                </div>
                <div className="flex flex-1 w-4/6 gap-8">
                    <div className="text-gray-50 font-sans">
                        <div>
                            <h2 className="font-mono text-2xl text-emerald-400 pb-4">Iconology Dataset</h2>
                            <p className="pb-12">
                                This project centers on the realm of iconography within the expanse of Italian Renaissance art, specifically concentrating on the depiction of objects in artworks from 1400 to 1600. The Italian Renaissance, a transformative period synonymous with profound societal change, heralded an era of unparalleled artistic brilliance. Art became a reflection of cultural ideologies, humanistic philosophies, and societal shifts. Italian artists of this epoch crafted masterpieces that encapsulated a multitude of subjects, from religious and mythological narratives to glimpses of everyday life.
                                <br />
                                In this exploration, the project aims to dissect and understand the visual elements and recurring objects found in artworks of the Italian Renaissance. While the focus is primarily on the 15th and 16th centuries, this study will delve into the nuances of Italian artistic expression, seeking to decode the significance and evolution of iconographic subjects within this specific cultural and temporal context.
                            </p>
                        </div>
                        <div>
                            <h2 className="font-mono text-2xl text-emerald-400 pb-4">Goals</h2>
                            <p className="pb-12">
                                This study seeks to unravel the patterns and shifts in the portrayal of iconographic subjects prevalent in Italian Renaissance art from 1400 to 1600. By analyzing artworks from this timeframe and scrutinizing the recurrence of specific objects, the project aims to discern the evolution and continuity of these subjects across the oeuvre of Italian artists. Additionally, it intends to explore potential correlations between these prominent objects and the geographical locations or artistic schools they were associated with, offering insights into the visual language and thematic preferences of this transformative era in art history.
                            </p>
                        </div>  
                    </div>
                </div>
            </article>
        </section>
    )
}

