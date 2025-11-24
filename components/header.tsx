"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/3d-printing-ncr/excel-logo.webp"
            alt="Excel Rapidtech Logo"
            className="md:h-10 md:w-auto h-8 w-auto "
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <button onClick={() => scrollToSection("services")} className="hover:text-orange-500">
            Services
          </button>
          <button onClick={() => scrollToSection("industries")} className="hover:text-orange-500">
            Industries
          </button>
          <button onClick={() => scrollToSection("infrastructure")} className="hover:text-orange-500">
            Infrastructure
          </button>
          <button onClick={() => scrollToSection("call")} className="hover:text-orange-500">
            Contact
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection("contact")}
            className="blink-button bg-orange-500 hover:bg-orange-600 text-white"
          >
            Get Quote
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t animate-slide-down">
          <nav className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <button
              onClick={() => {
                scrollToSection("services");
                setOpen(false);
              }}
              className="hover:text-orange-500"
            >
              Services
            </button>

            <button
              onClick={() => {
                scrollToSection("industries");
                setOpen(false);
              }}
              className="hover:text-orange-500"
            >
              Industries
            </button>

            <button
              onClick={() => {
                scrollToSection("infrastructure");
                setOpen(false);
              }}
              className="hover:text-orange-500"
            >
              Infrastructure
            </button>

            <button
              onClick={() => {
                scrollToSection("call");
                setOpen(false);
              }}
              className="hover:text-orange-500"
            >
              Contact
            </button>

            <Button
              onClick={() => {
                scrollToSection("contact");
                setOpen(false);
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white mt-2"
            >
              Get Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
