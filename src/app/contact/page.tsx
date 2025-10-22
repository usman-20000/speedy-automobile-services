"use client";
import Header from "@/assets/utils/header";
import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for contacting Speedy Automobile Services! We’ll reach out shortly.");
        setFormData({ name: "", phone: "", message: "" });
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
            
            <Header />
            <section className="min-h-screen bg-[#0D0D0D] text-gray-300 flex items-center justify-center px-6 py-16">
                <div className="max-w-4xl w-full space-y-8">
                    {/* Title */}
                    <div className="text-center space-y-3">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white">
                            Contact <span className="text-blue-400">Speedy Automobile Services</span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Have a question or need help? Reach out and our team will assist you right away.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center space-y-2">
                        <p>No towing, no waiting — we come to you!</p>
                        <p>
                            📞{" "}
                            <a
                                href="tel:00971505993679"
                                className="text-blue-400 hover:text-blue-300 font-medium transition"
                            >
                                +971 50 599 3679
                            </a>
                        </p>
                        <p>📍 Dubai, United Arab Emirates</p>
                        <p>🕒 Available 24/7 for roadside assistance</p>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-[#1A1A1A] rounded-2xl p-8 shadow-lg space-y-5 max-w-2xl mx-auto"
                    >
                        <div>
                            <label className="block text-sm mb-1 text-gray-400">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 text-gray-400">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 text-gray-400">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500 h-28"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-full transition-transform transform hover:scale-105"
                        >
                            🚗 Send Message
                        </button>
                    </form>

                    {/* Call to Action */}
                    <div className="text-center mt-8">
                        <a
                            href="tel:00971505993679"
                            className="inline-block bg-green-600 hover:bg-green-500 text-white font-medium px-6 py-3 rounded-full transition-transform transform hover:scale-105"
                        >
                            📞 Call Us Now
                        </a>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-10">
                        Speedy Automobile Services — Quick Jumpstart • Battery Replacement • Tyre & Puncture Repair
                    </p>
                </div>
            </section>
        </div>
    );
}
