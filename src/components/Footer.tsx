"use client";
import React from "react";
import Image from "next/image";
import starFooter from "../../public/StarFooter.svg";

export default function Footer() {
  function scrollToId(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="relative grid grid-cols-1 sm:grid-cols-3 w-full h-auto sm:h-[180px] px-6 sm:px-[90px] py-8 sm:py-[15px] mt-10 sm:mt-[90px] gap-8 sm:gap-0 rounded-t-[20px] sm:rounded-t-[30px] border-t border-white/[0.08] bg-bg/60 backdrop-blur-md z-40">
      {/* Sections + Contact */}
      <div className="flex flex-row justify-center sm:justify-start items-start gap-12 sm:gap-16">
        {/* Sections */}
        <div className="text-center sm:text-left">
          <h3 className="font-titles text-lg sm:text-xl font-medium tracking-wide text-white pb-3">
            Sections
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <button
                onClick={() => scrollToId("AboutMe")}
                className="text-white hover:text-white/80 text-sm sm:text-base hover:translate-x-1 transition-all duration-300"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId("Skills")}
                className="text-white hover:text-white/80 text-sm sm:text-base hover:translate-x-1 transition-all duration-300"
              >
                My Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId("Work")}
                className="text-white hover:text-white/80 text-sm sm:text-base hover:translate-x-1 transition-all duration-300"
              >
                My Work
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="font-titles text-lg sm:text-xl font-medium tracking-wide text-white pb-3">
            Contact Me
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="mailto:gabriel.bgs00@gmail.com"
                className="text-white hover:text-white/80 text-sm sm:text-base hover:translate-x-1 transition-all duration-300"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gabrielbgutierrez/"
                target="_blank"
                className="text-white hover:text-white/80 text-sm sm:text-base hover:translate-x-1 transition-all duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GabrielBG0"
                target="_blank"
                className="text-white hover:text-white/80 text-sm sm:text-base hover:translate-x-1 transition-all duration-300"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div
        className="flex justify-center items-center group cursor-pointer h-full"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Image
          src={starFooter}
          alt="logo"
          className="w-12 h-12 sm:w-16 sm:h-16 opacity-70 group-hover:opacity-100 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
        />
      </div>

      {/* Copyright */}
      <div className="flex justify-center sm:justify-end items-end sm:items-center font-titles text-xs sm:text-sm text-white/40 text-center sm:text-right pb-4 sm:pb-0">
        © {new Date().getFullYear()} — Gabriel Gutierrez
      </div>
    </footer>
  );
}
