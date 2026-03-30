import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Mechanic Dubai | Car Repair & Roadside Assistance in Dubai",
  description:
    "Looking for a reliable mobile mechanic in Dubai? We provide car repair, battery replacement, engine diagnostics, and emergency roadside assistance anywhere in Dubai.",
  keywords: [
    "mobile mechanic dubai",
    "car repair dubai",
    "roadside assistance dubai",
    "car mechanic near me dubai",
    "emergency car repair dubai",
    "car service at home dubai",
  ],
  alternates: {
    canonical: "https://www.yourwebsite.com/mobile-mechanic-dubai",
  },
  openGraph: {
    title: "Mobile Mechanic Dubai | Car Repair in Dubai",
    description:
      "Professional mobile mechanic services in Dubai. Fast, affordable, and available 24/7 for emergency car repairs.",
    url: "https://www.yourwebsite.com/mobile-mechanic-dubai",
    siteName: "Speedy Auto Services",
    locale: "en_AE",
    type: "website",
  },
};

export default function MobileMechanicDubai() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Mobile Mechanic Dubai – Fast & Reliable Car Repair Anywhere
        </h1>

        <p className="text-lg max-w-3xl mx-auto mb-6">
          Need a trusted mobile mechanic in Dubai? Our certified technicians
          provide on-site car repair, battery replacement, diagnostics, and
          emergency roadside assistance across Dubai.
        </p>

        <Link
          href="/contact"
          className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Book Mobile Mechanic
        </Link>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Mobile Mechanic Services in Dubai
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Car Battery Replacement
            </h3>
            <p>
              We provide fast battery replacement services anywhere in Dubai.
              Our team arrives quickly with high-quality batteries.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Emergency Car Repair
            </h3>
            <p>
              Stuck on the road? Our mobile mechanics offer 24/7 emergency
              repair services across Dubai.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Engine Diagnostics
            </h3>
            <p>
              Advanced diagnostic tools help us quickly identify and fix engine
              problems at your location.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Our Mobile Mechanic in Dubai?
        </h2>

        <ul className="max-w-4xl mx-auto space-y-4">
          <li>✔ 24/7 Mobile Mechanic Service</li>
          <li>✔ Fast Response Time</li>
          <li>✔ Certified Technicians</li>
          <li>✔ Affordable Pricing</li>
          <li>✔ Service Available Across Dubai</li>
        </ul>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Areas We Serve in Dubai
        </h2>

        <p className="text-center max-w-3xl mx-auto">
          We provide mobile mechanic services across all major locations in
          Dubai including Marina, Jumeirah, Downtown Dubai, Business Bay,
          Deira, Al Barsha, and surrounding areas.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-yellow-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need a Mobile Mechanic in Dubai?
        </h2>

        <p className="mb-6">
          Call us now for fast and reliable car repair services anywhere in
          Dubai.
        </p>

        <Link
          href="/contact"
          className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold"
        >
          Contact Us Now
        </Link>
      </section>
    </main>
  );
}