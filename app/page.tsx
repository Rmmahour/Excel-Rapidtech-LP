"use client";

import { ContactForm } from "@/components/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { url } from "inspector";
import { Clock, Target, ShieldCheck, Wrench, Layers, Zap, Cpu, Package, Car, Factory, FlaskConical, Rocket } from "lucide-react";

export default function Home() {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.replace("#", ""))
    if (!el) return

    const offset = 80

    const top = el.offsetTop - offset

    window.scrollTo({
      top,
      behavior: "smooth",
    })
  }



  const industries: any = [
    { name: 'Automotive', logo: '/3d-printing-ncr/Automotive.webp' },
    { name: 'General Manufacturing', logo: '/3d-printing-ncr/genreal-manufacturing.webp' },
    { name: 'Electronics & Electrical', logo: '/3d-printing-ncr/electronics-electrical.webp' },
    { name: 'Drones and Robotics', logo: '/3d-printing-ncr/fmcg.webp' },
    { name: 'Defence', logo: '/3d-printing-ncr/Defence.png' },
    { name: 'Home Appliances', logo: '/3d-printing-ncr/packaging.webp' },
    { name: 'Medical & Health', logo: '/3d-printing-ncr/prosthetic-parts.webp' },
    { name: 'Architecture', logo: '/3d-printing-ncr/Architecture.png' }
  ]

  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white ">
        <div className="flex justify-between items-center py-4 px-8 bg-white max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img src="/3d-printing-ncr/excel-logo.webp" alt="Excel Rapidtech Logo" className="h-15" />
            {/* <span className="font-bold text-xl text-gray-800">Excel Rapidtech</span> */}
          </div>
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <button onClick={() => scrollToSection("services")} className="hover:text-orange-500">Services</button>
            <button onClick={() => scrollToSection("industries")} className="hover:text-orange-500">Industries</button>
            {/* <a href="#clients" className="hover:text-orange-500">Clients</a> */}
            <button onClick={() => scrollToSection("infrastructure")} className="hover:text-orange-500">Infrastructure</button>
            <button onClick={() => scrollToSection("call")} className="hover:text-orange-500">Contact</button>
          </nav>
          <Button onClick={() => scrollToSection("contact")} className="bg-orange-500 hover:bg-orange-600 text-white">Get Quote</Button>
        </div>
      </header>

      {/* Hero Section with Contact Form */}
      <section className="text-white py-30 px-6 relative overflow-hidden">
        <div className="absolute -z-1 h-full w-[120vw] left-0 top-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url('/3d-printing-ncr/rapid-banner.png')` }} />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Competitive Edge in Industrial-Grade Prototyping
            </motion.h1>
            <p className="text-lg md:text-xl mb-3">
              Comprehensive 3D printing and vacuum casting services — including SLS & SLA painting — all securely done at our in-house facility to deliver precision and consistent quality for polymer and rubber parts.
            </p>
            <p className="text-xl font-bold md:text-2xl mb-8 text-gray-600 italic">Backed by over 360 projects successfully delivered.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" onClick={() => scrollToSection("call")} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                Talk to an Expert
              </Button>
              {/* <Button size="lg" onClick={() => scrollToSection("contact")} className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                Talk to an Expert
              </Button> */}
            </div>
          </div>

          {/* Contact Form Inside Hero */}
          <div className="bg-white text-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold mb-2">Are your 3D printed parts failing to meet your expectations?<br/>Want to improve delivery timelines or quality of parts? </h2>
            <h3 className="text-md my-4">We help you choose the right materials, technology, and process for flawless results.</h3>
            <h4 className="text-xl font-bold my-4">Get a Free Consultation</h4>
            <ContactForm />

            {/* <form className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Name" className="p-3 rounded-md bg-gray-100 border border-gray-300" />
              <input type="email" placeholder="Email ID" className="p-3 rounded-md bg-gray-100 border border-gray-300" />
              <input type="text" placeholder="Contact Number" className="p-3 rounded-md bg-gray-100 border border-gray-300" />
              <textarea placeholder="Project Description" rows={3} className="p-3 rounded-md bg-gray-100 border border-gray-300"></textarea>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full">Submit to proceed to our website</Button>
            </form> */}
          </div>
        </div>
      </section>

      {/* Why Excel Rapidtech */}
      <section id="why" className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-10">Why Businesses Choose Excel Rapidtech</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Clock, title: "Fast Turnaround Time", desc: "Get your parts delivered within 24–48 hours." },
            { icon: Target, title: "Industrial-Grade Materials & Precision", desc: "Professional FDM, SLA & SLS printers for complex geometries." },
            { icon: ShieldCheck, title: "Trusted by Designers & Engineers", desc: "Serving 250+ MSMEs & startups in NCR." },
            { icon: Wrench, title: "End-to-End Support", desc: "From design validation to post-processing and assembly." },
          ].map((item, i) => (
            <Card key={i} className="shadow-md border-none hover:shadow-lg transition">
              <CardContent className="p-6">
                <item.icon className="mx-auto mb-4 text-orange-500" size={40} />
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                {/* <p className="text-gray-600">{item.desc}</p> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Rapid Prototyping Services</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Zap, title: "3D Printing", desc: "Plastic, metal, and resin-based additive manufacturing." },
            { icon: Cpu, title: "Vacuum Casting", desc: "Low-volume production with high accuracy." },
            { icon: Package, title: "Reverse Engineering", desc: "From idea to ready-to-test models." },
            { icon: Layers, title: "CNC Machining", desc: "Turn your CAD files into working prototypes quickly." },
          ].map((service, i) => (
            <Card key={i} className="shadow-md border-none hover:shadow-lg transition">
              <CardContent className="p-6">
                <service.icon className="mx-auto mb-4 text-orange-500" size={40} />
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                {/* <p className="text-gray-600">{service.desc}</p> */}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* <Button onClick={() => scrollToSection("contact")} className="mt-10 bg-orange-500 hover:bg-orange-600">Send Your Design File for a Free Review</Button> */}
      </section>

      {/* Clients Section */}
      <section id="industries" className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Trusted by Leading Companies in various industries</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {industries.map((industry: any) => (
            <div key={industry.name} className="flex flex-col gap-3 items-center">
              <img src={industry.logo}
                alt={`Client ${industry.name}`} className="h-50 w-full rounded-xl grayscale hover:grayscale-0 hover:scale-[1.1] transition object-cover" />
              <h5>{industry.name}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our State-of-the-Art Infrastructure</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          Our advanced production facility is equipped with industrial-grade SLS & SLA 3D printers, Vacuum Casting, Post Processing & Painting, and dedicated QA team to ensure exceptional part quality.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["/3d-printing-ncr/SLA.webp", "/3d-printing-ncr/SLS.webp", "/3d-printing-ncr/Vaccumm Casting.webp"].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-lg">
              <img src={img} alt={`Infrastructure ${i + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      {/* <section id="industries" className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Trusted by Professionals Across Industries</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-lg">
          {[
            { icon: Car, title: "Automotive & Aerospace" },
            { icon: Factory, title: "Manufacturing & Tooling" },
            { icon: Rocket, title: "Startups & Design Labs" },
            { icon: FlaskConical, title: "Healthcare & Research" },
          ].map((industry, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 font-medium flex flex-col items-center">
              <industry.icon className="text-orange-500 mb-3" size={36} />
              {industry.title}
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
        <div className="bottomForm max-w-3xl mx-auto bg-gray-400 p-4 rounded-xl shadow-lg">
          <ContactForm  />
        </div>
        

        {/* <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-800 p-8 rounded-xl shadow-lg">
          <input type="text" placeholder="Name" className="p-3 rounded-md bg-gray-700 text-white border border-gray-600" />
          <input type="text" placeholder="Company Name" className="p-3 rounded-md bg-gray-700 text-white border border-gray-600" />
          <input type="text" placeholder="Contact Number" className="p-3 rounded-md bg-gray-700 text-white border border-gray-600" />
          <input type="email" placeholder="Email ID" className="p-3 rounded-md bg-gray-700 text-white border border-gray-600" />
          <input type="file" className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 md:col-span-2" />
          <textarea placeholder="Project Description" className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 md:col-span-2" rows={4}></textarea>
          <Button className="bg-orange-500 hover:bg-orange-600 md:col-span-2">Get Free Quote</Button>
        </form> */}
        <p className="text-sm mt-4 text-gray-300">100% Confidential | Fastest Turnaround in NCR</p>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <details className="bg-gray-50 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">What materials do you support Prototype printing?</summary>
            <p className="mt-2 text-gray-600">We support ABS, Nylon, PP, PC, Rubber, Metal etc.</p>
          </details>
          <details className="bg-gray-50 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">Do you accept low-volume orders?</summary>
            <p className="mt-2 text-gray-600">Yes, we specialize in prototypes and small batch manufacturing.</p>
          </details>
          <details className="bg-gray-50 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">How soon can I expect delivery?</summary>
            <p className="mt-2 text-gray-600">Most parts are delivered within 48 hours depending on the size & complexity.</p>
          </details>
        </div>

        <div className="mt-12" id="call">
          <h3 className="text-2xl font-bold mb-4">Ready to Prototype Your Next Innovation?</h3>
          <div className="flex justify-center gap-4">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-orange-500 hover:bg-orange-600">Get Free Quote</Button>
            <Button size="lg" variant="outline">Call +91 98990 77736</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
