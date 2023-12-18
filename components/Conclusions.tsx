import Link from "next/link";

export default function Conclusions() {
    return (
        <section id="coonclusions" className="pt-72 animate-fade-in-down">
            <article className="max-w-7xl m-auto w-auto flex flex-col md:flex-row align-top py-20">
                <div className="w-2/6 flex animate-fade-in-down justify-center">
                    <h3 className="font-mono text-xl text-gray-50 uppercase">Conclusions</h3>
                </div>
                <div className="flex flex-1 w-4/6 gap-8">
                    <div className="text-gray-50 font-sans">
                        <div>
                            <h2 className="font-mono text-2xl text-emerald-400 pb-4">Data Limitations</h2>
                            <p className="pb-12">
                                In this exploration of artwork datasets, while striving to unravel insights regarding subject recognition, the limitations posed by the inability to seamlessly merge the two inspected datasets hindered a comprehensive response to our initial inquiry. The disparity in the quantity and nature of artworks within the Iconology and Zeri datasets underscored the variance in outcomes when examining subject recognition.
                                <br/>
                                Notably, distinct results emerged from the analyses conducted on the Iconology and Zeri datasets, shedding light on how the diversity and abundance of artworks can influence and shape conclusions drawn from such studies. This divergence in findings accentuates the significance of consolidating diverse datasets and underlines the necessity of a complete RDF description of art.
                            </p>
                        </div>
                        <div>
                            <h2 className="font-mono text-2xl text-emerald-400 pb-4">A work in progress</h2>
                            <p className="pb-12">
                                This investigation emphasized the intrinsic link between data comprehensiveness and the depth of understanding in art history. It highlighted the pivotal role of a comprehensive RDF description of artworks in unlocking new discoveries and making the history of art more intriguing and receptive to novel revelations.
                                <br/>
                                Therefore, this study serves not only as an exploration of subject recognition but also as a testament to the crucial need for holistic and comprehensive datasets in enriching the realm of art historical research. By advocating for a more comprehensive approach to documenting art, it encourages a broader and more nuanced understanding of artistic expression, cultural narratives, and historical context, ultimately fostering a more dynamic and captivating history of art.
                            </p>
                        </div>  
                    </div>
                </div>
            </article>
        </section>
    )
}





