
import Link from "next/link";

export default function Header() {
    const phoneDisplay = "00971505993679";
    const telHref = `tel:${phoneDisplay}`;
    const whatsappHref = "https://wa.me/971505993679";
    return (
        <header className="w-full backdrop-blur-sm bg-white/70 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">S</div>
                        <div>
                            <h1 className="text-base sm:text-lg font-semibold">Speedy Automobile</h1>
                            <p className="text-xs text-gray-600 dark:text-gray-400">On-site car repair • No towing</p>
                        </div>
                    </div>

                    <nav aria-label="Main navigation" className="hidden md:flex gap-3 ml-6">
                        <Link href="/" className="px-3 py-2 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-800">Home</Link>
                        <Link href="/about" className="px-3 py-2 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-800">About</Link>
                        <Link href="/contact" className="px-3 py-2 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-800">Contact</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden lg:flex items-center gap-3 ml-2">
                        <a href={telHref} aria-label="Call Speedy now" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-lg hover:opacity-95">
                            Call now
                        </a>
                        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Speedy" className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:opacity-95">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}