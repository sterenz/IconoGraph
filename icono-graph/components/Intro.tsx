import Link from "next/link";

export default function Intro() {
    return (
        <section id="datasets" className="py-72 animate-fade-in-down">
            <article className="max-w-7xl m-auto w-auto flex flex-col md:flex-row align-top py-20">
                <div className="w-2/6 flex animate-fade-in-down justify-center">
                    <h3 className="font-mono text-xl text-gray-50 uppercase">Datasets Utilized</h3>
                </div>
                <div className="flex flex-1 w-4/6 gap-8">
                    <h1>Datasets Utilized</h1>
                    <div className="text-gray-50 font-sans">
                        <div>
                            <h2 className="font-mono text-2xl text-emerald-400 pb-4">Iconology Dataset</h2>
                            <p className="pb-12">
                                Originating from a Digital Humanities PhD project at the University of Bologna under Sofia Baroncini's leadership, the Iconology Dataset is a rich RDF dataset. It presents meticulously structured content featuring interpretations by distinguished art historian Erwin Panofsky and other esteemed art historians.
                                <br />
                                This dataset is openly accessible under the CC-BY-SA 4.0 license. Explore it at <Link target="_blank"  className="text-emerald-400 font-bold font-mono" href="https://w3id.org/icon/data/">Iconology Dataset.</Link>
                            </p>
                        </div>
                        <div>
                            <h2 className="font-mono text-2xl text-emerald-400 pb-4">Zeri Photo Archive Collection</h2>
                            <p className="pb-12">
                                The Zeri Photo Archive RDF serves as a significant subset of the expansive data available at the Zeri Catalog website, discoverable through the Europeana Portal. Established by the University of Bologna to honor Federico Zeri's legacy, the Federico Zeri Foundation curates an Art Library comprising 46,000 volumes, 37,000 auction catalogs, and 60 periodicals. Additionally, it hosts a Photo Archive with over 290,000 photographs encompassing monuments and artworks.
                                <br />
                                While the SPARQL endpoint is currently under maintenance at <Link target="_blank" className="text-emerald-400 font-bold font-mono" href="http://data.fondazionezeri.unibo.it/sparql">Zeri Photo Archive RDF</Link>, you can access the data via <Link target="_blank"  className="text-emerald-400 font-bold font-mono" href="https://amsacta.unibo.it/id/eprint/5497/">this source.</Link>
                            </p>
                        </div>  
                    </div>
                </div>
            </article>
        </section>
    )
}

