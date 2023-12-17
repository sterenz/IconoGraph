'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface ArtworkTypeData {
    year: number;
    artwork_type: string;
    artwork: string;
}

export default function BarChart() {
    const [jsonData, setJsonData] = useState<ArtworkTypeData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/sterenz/IconoGraph/dev/_clean/artwork_type.json');
                if (!response.ok) {
                    throw new Error("Network response was not ok.")
                }

                const data = await response.json() as ArtworkTypeData[];
                setJsonData(data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Count the number of each type of artwork
    const counts: { [key: string]: number } = {};
    jsonData.forEach((artwork) => {
        if (counts.hasOwnProperty(artwork.artwork_type)) {
            counts[artwork.artwork_type]++;
        } else {
            counts[artwork.artwork_type] = 1;
        }
    });

    // Prepare data for the chart
    const chartData = {
        labels: Object.keys(counts),
        datasets: [
            {
                label: 'Number of Artworks',
                data: Object.values(counts),
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Custom color for bars
                borderColor: 'rgba(54, 162, 235, 1)', // Custom border color for bars
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y' as const, // Specify 'y' explicitly
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Number of Different Types of Artworks',
            },
        },
    };

    // console.log(jsonData); // Check data in the console to ensure it's fetched

    return (
        <section id="barchart-artwork" className="pb-6">
            <article className="
                            max-w-7xl
                            m-auto
            ">
                <div className="
                            m-full
                            gap-6
                            h-full
                            animate-fade-in-down
                ">

                        <div className="
                                    bg-indigo-100
                                    rounded-2xl
                                    p-8
                                    md:p-12
                                    row-span-4
                                    relative
                                    hover:drop-shadow-md
                                    transition-all
                        ">
                            <div className="
                                        grid
                                        grid-cols-1
                                        lg:grid-cols-2
                                        gap-6
                                        pb-6
                            ">
                                <h1 className="
                                            font-bold
                                            text-4xl
                                            lg:text-6xl
                                            text-indigo-900
                                            pb-8
                                            pr-2
                                ">
                                    Immigrants Level of Education
                                </h1>
                                <p className="
                                            text-lg
                                ">
                                    Over the observed time span, there hasn't been a substantial change; however, there is a minor increase in the attainment of Secondary School degrees.
                                </p>

                            </div>

                            <div id="chart-container" className="
                                                            relative
                                                            m-auto
                                                            w-full
                                                            h-[32rem]
                                                            bg-gray-50
                                                            rounded-xl
                                                            px-2 py-6 mb-12
                                                            
                            ">
                                {jsonData.length > 0 ? (
                                    <Bar data={chartData} options={options} />
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                    </div>
            </article>
        </section>
    )
}
