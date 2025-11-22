"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";



export default function ThankYouPage() {
    const router = useRouter();
    const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }
    return (
        <>
            <header className="sticky top-0 z-50 bg-white ">
                <div className="flex justify-between items-center py-4 px-8 bg-white max-w-7xl mx-auto">
                    <div className="flex items-center gap-2">
                        <a href="/3d-printing-ncr/">
                            <img src="/3d-printing-ncr/excel-logo.webp" alt="Excel Rapidtech Logo" className="h-15" />
                        </a>

                        {/* <span className="font-bold text-xl text-gray-800">Excel Rapidtech</span> */}
                    </div>
                    <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                        <a href="/3d-printing-ncr/#services" className="hover:text-orange-500">Services</a>
                        <a href="/3d-printing-ncr/#industries" className="hover:text-orange-500">Industries</a>
                        <a href="/3d-printing-ncr/#clients" className="hover:text-orange-500">Clients</a>
                        <a href="/3d-printing-ncr/#infrastructure" className="hover:text-orange-500">Infrastructure</a>
                        <a href="/3d-printing-ncr/#contact" className="hover:text-orange-500">Contact</a>
                    </nav>
                    <Button onClick={() => router.push("/#contact")} className="bg-orange-500 hover:bg-orange-600 text-white">Get Quote</Button>
                </div>
            </header>

            <section className="min-h-screen bg-[#f6f6f6] flex items-center justify-center px-4 py-20">
                <div className="mx-auto bg-white rounded-xl shadow-lg p-16 text-center border border-gray-200">

                    {/* Success Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-[#F5A623]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <h1 className="text-8xl md:text-6xl font-bold text-[#00355d] mb-4">
                        Thank You!
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg text-gray-600 mb-6">
                        Your form has been successfully submitted. Our team will get in touch
                        with you shortly.
                    </p>

                    {/* Button */}
                    <Link
                        href="/"
                        className="inline-block px-8 py-3 mt-4 bg-[#F5A623] text-black font-semibold rounded-md hover:bg-[#00355d] hover:text-white transition-all duration-300"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="../"
                        className="ms-4 inline-block px-8 py-3 mt-4 bg-[#00355d] text-white font-semibold rounded-md hover:bg-[#F5A623] hover:text-black transition-all duration-300"
                    >
                        Visit Our Main Website
                    </Link>
                </div>
            </section></>
    );
}
