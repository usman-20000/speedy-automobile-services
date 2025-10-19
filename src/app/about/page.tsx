"use client";
import Header from "@/assets/utils/header";
import React from "react";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
            <Header />
            <section className="min-h-screen bg-[#0D0D0D] text-gray-300 flex items-center justify-center px-6 py-16">
                <div className="max-w-4xl text-center space-y-6">
                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl font-bold text-white">
                        About <span className="text-blue-400">Speedy Automobile Services</span>
                    </h1>
                    {/* Call to Action */}
                    <div className="mt-8">
                        <p className="text-sm text-gray-400 mb-3">
                            Need urgent help? We’re available 24/7.
                        </p>
                        <a
                            href="tel:00971505993679"
                            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full transition-transform transform hover:scale-105"
                        >
                            📞 Call Us Now: +971 50 599 3679
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed text-gray-400">
                        At <span className="text-white font-semibold">Speedy Automobile Services</span>,
                        we specialize in providing fast, reliable on-site car repair solutions —
                        including <span className="text-blue-400">quick jumpstart service</span>,
                        <span className="text-blue-400"> car battery replacement</span>,
                        <span className="text-blue-400"> tyre change</span>, and
                        <span className="text-blue-400"> puncture repair</span>.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-400">
                        No towing, no waiting — just call, and our expert team will reach you
                        wherever you are and get you moving again. Whether you’re stuck at home,
                        on the roadside, or in a parking lot, we’ve got you covered.
                    </p>

                    {/* Tagline */}
                    <p className="text-sm text-gray-500 mt-10">
                        Speedy Automobile Services — Fast • Reliable • On-site Car Assistance
                    </p>
                </div>
            </section>
        </div>
    );
}
