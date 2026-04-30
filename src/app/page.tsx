"use client";

import Head from "next/head";
import Link from "next/link";
import image01 from "../assets/images/image01.jpeg";
import image02 from "../assets/images/car-ac-service.png";
import Image from "next/image";
import Header from "@/assets/utils/header";
import Script from "next/script";

export default function Home() {
  const phoneDisplay = "00971505993679";
  const telHref = `tel:${phoneDisplay}`;
  const whatsappHref = "https://wa.me/971505993679";

  const services = [
    { id: 1, title: "Mobile Car AC Repair", desc: "Professional car ac recharge and cooling fix at your spot.", icon: "❄️" },
    { id: 2, title: "Battery Replacement", desc: "Testing & quality on-site battery swaps.", icon: "🔋" },
    { id: 3, title: "Quick Jumpstart", desc: "Fast on-site battery boost to get you moving.", icon: "⚡" },
    { id: 4, title: "Tyre Change & Repair", desc: "Wheel change, puncture repair and balancing.", icon: "🛞" },
  ];

  const carTypes = [
    "Sedan", "SUV", "Hatchback", "Coupe", "Convertible", "Minivan", "Pickup", "Electric vehicles"
  ];

  return (
    <>
      <Head>
        <title>
          Mobile Car AC Repair & Recharge Dubai | Speedy Auto Services
        </title>
        <meta
          name="description"
          content="Expert car AC repair near me in Dubai. We fix car AC blowing hot air with professional car AC recharge, refrigerant refill, and compressor repair at your location. Call 00971505993679."
        />
        {/* Updated Keywords with your new list */}
        <meta
          name="keywords"
          content="car ac repair near me, car ac recharge, car ac repair, car ac blowing hot air, car ac recharge near me, car ac service near me, car ac compressor, car ac refrigerant, car ac recharge kit, Dubai mobile car AC service"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.speedyautomobileservices.com/" />
        
        <meta property="og:title" content="Speedy Automobile Services | Car AC Repair Near Me Dubai" />
        <meta property="og:description" content="Is your car AC blowing hot air? Get a professional car AC recharge and service near you in Dubai. 24/7 Mobile assistance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speedyautomobileservices.com/" />
        <meta property="og:image" content="/logo.png" />

        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {`{
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Speedy Automobile Services",
            "image": "https://www.speedyautomobileservices.com/logo.png",
            "telephone": "+971505993679",
            "url": "https://www.speedyautomobileservices.com/",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dubai, UAE",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.2048,
              "longitude": 55.2708
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Car AC Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car AC Repair Near Me" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car AC Recharge & Refrigerant Refill" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car AC Compressor Diagnosis" } }
              ]
            }
          }`}
        </Script>
      </Head>

      <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
        <Header />

        <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-sm font-medium mb-4 border border-blue-100">
                ❄️ Car AC Service Near Me • Professional Recharge
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Expert Car AC Repair & Recharge in Dubai
              </h1>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
                Is your <strong>car AC blowing hot air</strong>? Our mobile team offers the best 
                <strong> car AC recharge near me</strong>. We handle <strong>car ac refrigerant</strong> refills, 
                <strong> car ac compressor</strong> repairs, and complete <strong>car ac service near me</strong> across Dubai.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-2xl text-lg sm:text-base transform hover:scale-[1.02] transition"
                >
                  <span className="font-semibold">Call For AC Repair: {phoneDisplay}</span>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-green-600 text-green-700 rounded-2xl shadow-lg text-lg sm:text-base hover:bg-green-50 transition"
                >
                  <span className="font-semibold">WhatsApp AC Recharge</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <div
                    key={s.id}
                    className="flex flex-col gap-3 bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-xl transition border border-gray-100 dark:border-gray-700"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{s.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
                    </div>
                    <a href={telHref} className="text-blue-600 font-medium text-sm mt-2">Get Quote →</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl flex flex-row items-center justify-between bg-gray-200">
                <Image src={image01} alt="Car ac recharge service" className="w-[60%] h-74 object-cover" />
                <Image src={image02} alt="Car ac repair near me" className="w-[40%] h-74 object-cover" />
              </div>

              <div className="mt-8 p-6 bg-blue-600 text-white rounded-xl shadow-lg -translate-y-6 mx-4">
                <h5 className="font-bold text-lg mb-2 italic">Car AC Service Near Me</h5>
                <p className="text-sm opacity-90">
                  We don't just use a basic <strong>car ac recharge kit</strong>. We provide professional-grade vacuuming and leak testing to ensure your <strong>car ac compressor</strong> stays healthy.
                </p>
              </div>
            </div>
          </section>

          {/* ✅ Integrated Keyword Content Section */}
          <section className="mt-20 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Professional Car AC Recharge & Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Searching for <strong>car ac repair near me</strong>? If your <strong>car ac blowing hot air</strong>, 
                  you likely need a <strong>car ac recharge</strong>. Our technicians use premium <strong>car ac refrigerant</strong> 
                  to restore your car's cooling system to factory standards.
                </p>
                <p>
                  While many people try a DIY <strong>car ac recharge kit</strong>, these can often damage your 
                  <strong> car ac compressor</strong> if used incorrectly. Our <strong>car ac service near me</strong> 
                  includes a full diagnostic to ensure there are no leaks before we perform a refill.
                </p>
                <h3 className="text-xl font-semibold text-blue-600">Why choose our Car AC Service?</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Instant Car AC Recharge:</strong> We come to your location 24/7.</li>
                  <li><strong>Compressor & Refrigerant Care:</strong> High-quality gas refill (R134a/R1234yf).</li>
                  <li><strong>Expert Leak Detection:</strong> Stop wasting money on constant refills.</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4">Mobile AC Service Coverage</h3>
                <p className="text-sm mb-4 italic text-blue-800 dark:text-blue-300 underline font-semibold">Providing the best car ac recharge near me in:</p>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                  <span className="p-2 bg-white dark:bg-gray-700 rounded shadow-sm">Dubai Marina</span>
                  <span className="p-2 bg-white dark:bg-gray-700 rounded shadow-sm">Business Bay</span>
                  <span className="p-2 bg-white dark:bg-gray-700 rounded shadow-sm">JLT / JBR</span>
                  <span className="p-2 bg-white dark:bg-gray-700 rounded shadow-sm">Al Barsha</span>
                  <span className="p-2 bg-white dark:bg-gray-700 rounded shadow-sm">Downtown Dubai</span>
                  <span className="p-2 bg-white dark:bg-gray-700 rounded shadow-sm">Sheikh Zayed Rd</span>
                </div>
                <p className="mt-4 text-xs italic text-gray-500">Fastest Car AC Repair Dubai — 25 Min Arrival.</p>
              </div>
            </div>
          </section>

          {/* Rest of the components remain consistent for branding */}
          <section className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Fast & Reliable Roadside Help</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: "⏱️", title: "Near You", desc: "Our mobile units provide car ac recharge near me in under 30 minutes." },
                { icon: "🔧", title: "Expert Fix", desc: "Certified car ac compressor and electrical troubleshooting." },
                { icon: "💎", title: "Fair Pricing", desc: "No hidden costs for car ac refrigerant refills or repairs." },
              ].map((item, i) => (
                <div key={i} className="text-center p-4">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-gray-800 bg-[#0D0D0D] text-gray-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Speedy Automobile Services</h4>
                <p className="text-sm text-gray-400">
                  Dubai's trusted 24/7 mobile mechanic. We fix <strong>car ac blowing hot air</strong> 
                  and provide the most reliable <strong>car ac service near me</strong>.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-white mb-4">Quick Links</h5>
                <ul className="text-sm space-y-2 text-gray-400">
                  <li>• Car AC Recharge Dubai</li>
                  <li>• Car AC Compressor Repair</li>
                  <li>• Car AC Refrigerant Refill</li>
                  <li>• Battery & Tyre Service</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-white mb-4">Contact Now</h5>
                <a href={telHref} className="text-2xl font-bold text-blue-400">{phoneDisplay}</a>
                <p className="text-xs mt-2 text-gray-500 uppercase tracking-widest uppercase">Dubai & UAE Wide</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
              © {new Date().getFullYear()} Speedy Automobile Services — Car AC Repair Near Me • Professional Recharge.
            </div>
          </div>
        </footer>

        {/* Floating Mobile CTA */}
        <div className="fixed bottom-4 left-4 right-4 sm:hidden z-50">
          <div className="flex gap-3">
            <a
              href={telHref}
              className="flex-1 inline-flex items-center justify-center gap-3 px-5 py-4 bg-blue-600 text-white rounded-2xl shadow-2xl text-lg font-bold animate-pulse"
            >
              Call For AC Fix
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 flex items-center justify-center bg-white border-2 border-green-600 text-green-600 rounded-2xl shadow-lg"
            >
              <span className="text-2xl">💬</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}