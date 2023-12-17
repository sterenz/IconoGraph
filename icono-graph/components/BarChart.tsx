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

    // Convert counts object to an array of objects
    const dataForChart = Object.entries(counts).map(([artwork_type, count]) => ({
        artwork_type,
        count,
    }));

    // Sort the data by count in descending order
    dataForChart.sort((a, b) => b.count - a.count); // Sort in descending order 

    // Prepare data for the chart
    const chartData = {
        labels: dataForChart.map((item) => item.artwork_type),
        datasets: [
            {
                label: 'Number of Artworks',
                data: dataForChart.map((item) => item.count),
                backgroundColor: 'rgb(52 211 153)', // Custom color for bars
            },
        ],
    };

    const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: 'Number of Different Types of Artworks',
            },
        },
        scales: {
            x: {
                
                color: 'rgb(249 250 251)', // Font color for x-axis labels
                ticks: {
                    color: 'rgb(249 250 251)', // Font color for x-axis labels
                },
                grid: {
                    color: 'rgba(249, 250, 251, 0.2)', // Color for x-axis grid lines
                },
            },
            y: {
                color: 'rgb(249 250 251)', // Font color for y-axis labels
                ticks: {
                    color: 'rgb(249 250 251)', // Font color for y-axis labels
                },
                grid: {
                    color: 'rgba(249, 250, 251, 0)', // Color for y-axis grid lines
                },
                title: {
                    display: false,
                    text: 'Artwork Types',
                    color: 'rgb(249 250 251)', // You can also set color for the title if needed
                },
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
                                    p-8
                                    md:p-12
                                    row-span-4
                                    relative
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
                                            font-display
                                            text-4xl
                                            lg:text-6xl
                                            text-emerald-400
                                            pb-8
                                            pr-2
                                ">
                                    Artwork Types
                                </h1>
                                <p className="
                                            text-gray-50 font-sans text-lg
                                ">
                                    The majority of the artworks in the Zeri's Archive, in the time span under consideration, 1400-1600, are mostly paintings.
                                </p>

                            </div>

                            <div id="chart-container" className="
                                                            relative
                                                            m-auto
                                                            w-full
                                                            h-[32rem]
                                                            rounded-xl
                                                            px-2 py-6 mb-12
                                                            
                            ">
                                {jsonData.length > 0 ? (
                                    <Bar data={chartData} options={options} className="w-full" />
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
