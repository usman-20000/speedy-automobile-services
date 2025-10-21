import Head from "next/head";
import Link from "next/link";
import image01 from "../assets/images/image01.jpeg";
import Image from "next/image";
import Header from "@/assets/utils/header";
import { Html } from "next/document";
import Script from "next/script";

export default function Home() {
  const phoneDisplay = "00971505993679";
  const telHref = `tel:${phoneDisplay}`;
  const whatsappHref = "https://wa.me/971505993679";

  const services = [
    { id: 1, title: "Quick Jumpstart", desc: "Fast on-site battery boost to get you moving.", icon: "⚡" },
    { id: 2, title: "Battery Replacement", desc: "Testing & quality on-site battery swaps.", icon: "🔋" },
    { id: 3, title: "Tyre Change & Repair", desc: "Wheel change, puncture repair and balancing.", icon: "🛞" },
  ];

  const carTypes = [
    "Sedan", "SUV", "Hatchback", "Coupe", "Convertible", "Minivan", "Pickup", "Electric vehicles"
  ];

  return (
    <>
      {/* ✅ SEO Meta Tags for Google */}
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17665624410"
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17665624410');
          `,
          }}
        />
        <title>
          Speedy Automobile Services | uae | On-Site Car Repair, Jumpstart, Battery Replacement in Dubai
        </title>
        <meta
          name="description"
          content="Speedy Automobile Services provides fast on-site car repair — jumpstart, battery replacement, tyre change & puncture repair in Dubai. No towing, no waiting — call 00971505993679 now!"
        />
        <meta
          name="keywords"
          content="car jumpstart Dubai, battery replacement, tyre repair Dubai, on-site car service, speedy automobile services, car battery delivery, roadside assistance, car repair Dubai, puncture repair, mobile car service"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.speedyautomobile.ae/" />
        <meta property="og:title" content="Speedy Automobile Services | On-site Car Repair Dubai" />
        <meta
          property="og:description"
          content="Quick car repair at your location — battery, tyre, and jumpstart service in Dubai. No towing, no waiting."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.speedyautomobile.ae/" />
        <meta property="og:image" content="/logo.png" />
      </Head>

      {/* ✅ Main Content */}
      <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
        <Header />

        <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-800 text-sm font-medium mb-4">
                No towing • No waiting • We come to you
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Speedy on-site car repair — get moving in minutes
              </h2>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
                Quick jumpstart, battery replacement, tyre change & puncture repair — our trained
                team reaches your location and fixes issues on the spot.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={telHref}
                  aria-label="Call now"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-2xl text-lg sm:text-base transform hover:scale-[1.02] transition"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.86.38 1.7.78 2.5a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.8.4 1.64.66 2.5.78A2 2 0 0 1 22 16.92z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-semibold">Call now</span>
                  <span className="hidden sm:inline">: {phoneDisplay}</span>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message on WhatsApp"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-green-600 text-green-700 rounded-2xl shadow-lg text-lg sm:text-base hover:bg-green-50 transition"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M20.5 3.5A11.95 11.95 0 0 0 12 1C6 1 1.2 5.8 1.2 11.8c0 2.1.55 4.15 1.6 5.98L1 24l6.56-1.7A11.9 11.9 0 0 0 12 23.8c6 0 10.8-4.8 10.8-10.8 0-3-1.2-6-3.3-8.5z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-semibold">WhatsApp us</span>
                </a>
              </div>

              {/* Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s) => (
                  <div
                    key={s.id}
                    className="flex flex-col gap-3 bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-2xl transition"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-2xl">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{s.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
                    </div>
                    <div className="mt-auto">
                      <a
                        href={telHref}
                        className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                      >
                        Book now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side (Image + Info Card) */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={image01}
                  alt="Speedy Automobile Services"
                  className="w-full h-74"
                />
              </div>

              <div className="mt-12 p-4 bg-white/90 dark:bg-gray-800/80 rounded-xl shadow-md -translate-y-10">
                <h5 className="font-semibold mb-2">How it works</h5>
                <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Call or WhatsApp with location & issue.</li>
                  <li>We dispatch a technician to your spot.</li>
                  <li>We repair on-site — no towing required.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mt-12 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold mb-4">Why customers choose Speedy</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "⏱️", title: "Fast response", desc: "Technicians reach you quickly and get you back on the road." },
                { icon: "🔧", title: "Trained technicians", desc: "Experienced pros with portable tools and parts." },
                { icon: "💳", title: "Transparent pricing", desc: "Clear estimates before work begins." },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="text-3xl">{item.icon}</div>
                  <h4 className="font-semibold mt-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-gray-800 bg-[#0D0D0D] text-gray-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
              <div className="max-w-md">
                <h4 className="text-lg font-semibold text-white">
                  Speedy Automobile Services
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  On-site quick jumpstart, battery replacement, tyre change & puncture repair.
                </p>
                <p className="mt-3">
                  <a
                    href={telHref}
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {phoneDisplay}
                  </a>
                </p>
                <p className="text-xs text-gray-500 mt-4">
                  No towing, no waiting — we come to you.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-3">
                  We service these car types
                </h5>
                <ul className="flex flex-wrap gap-2">
                  {carTypes.map((ct) => (
                    <li
                      key={ct}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full shadow-sm hover:bg-gray-700 transition"
                    >
                      {ct}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-xs text-gray-500 border-t border-gray-800 pt-4 text-center lg:text-left">
              © {new Date().getFullYear()} Speedy Automobile Services — Quick jumpstart • Battery
              replacement • Tyre & puncture repair
            </div>
          </div>
        </footer>

        {/* Floating Mobile CTA */}
        <div className="fixed bottom-4 left-4 right-4 sm:hidden z-50">
          <div className="max-w-3xl mx-auto flex gap-3">
            <a
              href={telHref}
              aria-label="Call now"
              className="flex-1 inline-flex items-center justify-center gap-3 px-5 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl shadow-2xl text-lg font-semibold animate-pulse"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.86.38 1.7.78 2.5a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.8.4 1.64.66 2.5.78A2 2 0 0 1 22 16.92z"
                  fill="currentColor"
                />
              </svg>
              Call
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-20 flex items-center justify-center px-4 py-4 bg-white border border-green-600 text-green-700 rounded-2xl shadow-lg"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M20.5 3.5A11.95 11.95 0 0 0 12 1C6 1 1.2 5.8 1.2 11.8c0 2.1.55 4.15 1.6 5.98L1 24l6.56-1.7A11.9 11.9 0 0 0 12 23.8c6 0 10.8-4.8 10.8-10.8 0-3-1.2-6-3.3-8.5z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
