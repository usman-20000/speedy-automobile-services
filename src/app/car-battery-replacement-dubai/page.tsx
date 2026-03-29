import Header from "@/assets/utils/header";
import Image from "next/image";
import Script from "next/script";
import img from "@/assets/images/car-battery-replacement-dubai.jpg"
import CallButton from "@/assets/utils/CallButton";

export const metadata = {
    title: "Car Battery Replacement Dubai | 24/7 Mobile Battery Service",
    description:
        "Need car battery replacement in Dubai? Get fast, reliable 24/7 mobile battery service anywhere in Dubai. Affordable prices, expert technicians, and doorstep installation.",
    keywords: [
        "car battery replacement dubai",
        "mobile car battery dubai",
        "24/7 battery replacement dubai",
        "car battery service dubai",
        "emergency car battery replacement dubai",
    ],
    alternates: {
        canonical:
            "https://www.speedyautomobileservices.com/car-battery-replacement-dubai",
    },
    openGraph: {
        title: "Car Battery Replacement Dubai | 24/7 Mobile Service",
        description:
            "Professional car battery replacement in Dubai. Fast response, affordable prices, and doorstep installation available 24/7.",
        url: "https://www.speedyautomobileservices.com/car-battery-replacement-dubai",
        siteName: "Speedy Auto Mobile Services",
        locale: "en_AE",
        type: "website",
    },
};

export default function CarBatteryReplacementDubai() {
    const phoneDisplay = "00971505993679";
    const telHref = `tel:${phoneDisplay}`;

    const handleCallClick = () => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "conversion", {
                send_to: "AW-17665624410/wbWDCLSz9LEbENqS0OdB",
            });
        }
        window.location.href = telHref;
    };


    return (
        <>
            {/* Schema Markup */}
            <Header />
            <Script
                id="car-battery-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AutoRepair",
                        name: "Speedy Auto Mobile Services",
                        image: `${img}`,
                        "@id":
                            "https://www.speedyautomobileservices.com/car-battery-replacement-dubai",
                        url:
                            "https://www.speedyautomobileservices.com/car-battery-replacement-dubai",
                        telephone: "+971-505993679",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Dubai",
                            addressCountry: "AE",
                        },
                        openingHours: "Mo-Su 00:00-23:59",
                        priceRange: "$$",
                    }),
                }}
            />

            <main className="container mx-auto px-6 py-12">

                {/* HERO SECTION */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Car Battery Replacement Dubai – Fast & Reliable 24/7 Service
                    </h1>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Looking for a trusted car battery replacement service in Dubai?
                        Our professional technicians provide quick and affordable mobile
                        battery replacement anywhere in Dubai. We offer emergency roadside
                        assistance, doorstep installation, and premium battery brands.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src={img}
                            alt="Car Battery Replacement Dubai - 24/7 Mobile Battery Service"
                            width={900}
                            height={500}
                            priority
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </section>

                {/* SERVICES */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">
                        Our Car Battery Services in Dubai
                    </h2>

                    <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                        <li>✔ 24/7 Emergency Car Battery Replacement</li>
                        <li>✔ Mobile Battery Replacement at Your Location</li>
                        <li>✔ Free Battery Testing & Diagnostics</li>
                        <li>✔ Installation by Certified Technicians</li>
                        <li>✔ Premium Battery Brands Available</li>
                        <li>✔ Affordable Prices with Warranty</li>
                    </ul>
                </section>

                {/* WHY CHOOSE US */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">
                        Why Choose Our Battery Replacement Service in Dubai?
                    </h2>

                    <p className="text-gray-700 mb-4">
                        We provide fast, reliable, and professional car battery replacement
                        services across Dubai. Whether your battery dies at home, office, or
                        roadside, our team arrives quickly and installs a new battery on the
                        spot.
                    </p>

                    <ul className="list-disc pl-6 text-gray-700">
                        <li>Fast Response Time</li>
                        <li>24/7 Availability</li>
                        <li>Certified Technicians</li>
                        <li>Affordable Pricing</li>
                        <li>Warranty on Batteries</li>
                    </ul>
                </section>

                {/* AREAS */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">
                        Areas We Serve in Dubai
                    </h2>

                    <p className="text-gray-700">
                        We provide car battery replacement services across all major areas
                        in Dubai including:
                    </p>

                    <ul className="grid md:grid-cols-3 gap-3 mt-4 text-gray-700">
                        <li>Dubai Marina</li>
                        <li>Jumeirah</li>
                        <li>Downtown Dubai</li>
                        <li>Business Bay</li>
                        <li>Deira</li>
                        <li>Al Barsha</li>
                        <li>Al Quoz</li>
                        <li>Dubai Silicon Oasis</li>
                        <li>International City</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">

                        <div>
                            <h3 className="font-semibold">
                                How long does car battery replacement take?
                            </h3>
                            <p className="text-gray-700">
                                Most battery replacements are completed within 30 to 45 minutes
                                after arrival.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                Do you provide 24/7 battery replacement in Dubai?
                            </h3>
                            <p className="text-gray-700">
                                Yes, we offer round-the-clock emergency car battery replacement
                                services anywhere in Dubai.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                What is the cost of car battery replacement in Dubai?
                            </h3>
                            <p className="text-gray-700">
                                The price depends on the vehicle type and battery brand, but we
                                provide competitive and transparent pricing.
                            </p>
                        </div>

                    </div>
                </section>

                <section className="text-center bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">
                        Need Car Battery Replacement in Dubai?
                    </h2>

                    <p className="text-gray-700 mb-6">
                        Call us now for fast and reliable mobile battery replacement service
                        anywhere in Dubai.
                    </p>
                    <CallButton />
                </section>

            </main>
        </>
    );
}