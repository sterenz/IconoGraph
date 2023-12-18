'use client'

import Image from "next/image"
import { useEffect, useState } from "react";
import Link from "next/link";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import locationDotSolid from "@/public/location-dot-solid.svg"; // Import the image

interface GeocodeData {
    geocode: [number, number];
    artwork_title: string;
    year: number;
    keeper: string;
}

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: locationDotSolid.src,
  iconSize: [24, 24] // size of the icon
});

export default function Map() {

    const [geocodejsonData, setGeocodejsonData] = useState<GeocodeData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/sterenz/IconoGraph/dev/_clean/artworks_location.json');

                    if (!response.ok) {
                        throw new Error("Network response was not ok.")
                    }

                    const data = await response.json() as GeocodeData[];
                    setGeocodejsonData(data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const createClusterCustomIcon = function (cluster: any) {
        return divIcon({
            html: `<span className="h-[3rem] w-[3rem] bg-emerald-400 rounded-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-center">${cluster.getChildCount()}</span>`,
            className: "custom-marker-cluster",
            iconSize: [33, 33]
        });
    };

    const markers = geocodejsonData || [];
 
    return (
        <section id="map-artwork" className="pb-40">
            <article className="
                            max-w-7xl
                            m-auto
            ">
                <div className="
                            p-8 md:p-12
                            col-span-12
                            lg:col-span-7
                            grid
                            transition-all
                ">

                    <div className="
                                grid
                                grid-cols-1
                                lg:grid-cols-2
                                gap-6
                                pb-6
                    ">
                        <div>
                            <h1 className="
                                        font-bold
                                        font-display
                                        text-4xl
                                        lg:text-5xl
                                        text-emerald-400
                            ">
                                Artworks distribution
                            </h1>
                            <h2  className="
                                        font-mono
                                        text-2xl
                                        md:text-3xl
                                        text-emerald-400
                            ">
                                in Italy
                            </h2>
                        </div>
                        <p className="
                                text-gray-50 font-sans text-lg
                        ">
                            The map above shows Renaissance artworks distribution throughout the country.
                        </p>
                    </div>
                    <div id="chart-container" className="
                                                relative
                                                m-auto
                                                w-full
                                                h-[46rem]
                                                rounded-xl
                                                px-2 py-6
                                                
                    ">
                        <MapContainer center={[41.872, 12.567]} zoom={5.5} scrollWheelZoom={false} style={{ height: '44rem', opacity: "0.8" }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
                                url="https://api.mapbox.com/styles/v1/renzrenz/ckkpj99tm0zei17p7s2a9hamh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmVuenJlbnoiLCJhIjoiY2trcGo3cHRtMGRpcTJ1czE2bWE5bnd2biJ9.cFUxoodeOiS16_Na8xFm9Q"
                            />
                            <MarkerClusterGroup
                                chunkedLoading
                                iconCreationFunction={createClusterCustomIcon}
                            >
                                {markers.map((marker, index) => (
                                    <Marker key={index} position={marker.geocode} icon={customIcon}>
                                        <Popup>{marker.artwork_title}</Popup>
                                    </Marker>
                                ))}
                            </MarkerClusterGroup>
                        </MapContainer>
                    </div>
                </div>
            </article>
        </section>
    )
}