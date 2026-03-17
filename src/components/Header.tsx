"use client";
import React, { useState } from "react";
import Image from "next/image";
import star from "../../public/StarHeader.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToId(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center w-full h-[60px] md:h-[90px] px-6 md:px-[90px] py-3 md:py-[15px] mb-4 md:mb-[90px] rounded-b-[20px] sm:rounded-b-[30px] border-b border-white/[0.08] bg-bg/60 backdrop-blur-md">
        {/* Logo + Name */}
        <div
          className="flex items-center group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src={star}
            alt="logo"
            className="w-7 h-7 md:w-auto md:h-auto opacity-100 group-hover:rotate-[120deg] transition-all duration-500"
          />
          <h1 className="pl-2 md:pl-3 text-xl md:text-5xl font-header tracking-wider whitespace-nowrap text-white">
            Gabriel Gutierrez
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-end gap-8 lg:gap-[90px] font-titles text-xl lg:text-2xl text-center">
          <button
            onClick={() => scrollToId("AboutMe")}
            className="text-white hover:text-white/80 hover:-translate-y-0.5 transition-all duration-300"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToId("Skills")}
            className="text-white hover:text-white/80 hover:-translate-y-0.5 transition-all duration-300"
          >
            My Skills
          </button>
          <button
            onClick={() => scrollToId("Work")}
            className="text-white hover:text-white/80 hover:-translate-y-0.5 transition-all duration-300"
          >
            My Work
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-bg/95 backdrop-blur-md transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <button
            onClick={() => scrollToId("AboutMe")}
            className="font-titles text-3xl tracking-wider text-white/90 hover:text-white transition-colors"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToId("Skills")}
            className="font-titles text-3xl tracking-wider text-white/90 hover:text-white transition-colors"
          >
            My Skills
          </button>
          <button
            onClick={() => scrollToId("Work")}
            className="font-titles text-3xl tracking-wider text-white/90 hover:text-white transition-colors"
          >
            My Work
          </button>
        </div>

        {/* Close button */}
        <button
          className="absolute top-4 right-6 w-8 h-8 flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-[2px] bg-white rotate-45 absolute" />
          <span className="block w-6 h-[2px] bg-white -rotate-45 absolute" />
        </button>
      </div>
    </header>
  );
}
