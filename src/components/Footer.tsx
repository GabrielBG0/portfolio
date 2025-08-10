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
    <div className="grid grid-cols-1 sm:grid-cols-3 w-full h-auto sm:h-[180px] px-6 sm:px-[90px] py-6 sm:py-[15px] mt-[40px] sm:mt-[90px] gap-8 sm:gap-0 rounded-t-[30px] border-t-[2px] border-white">
      {/* Sections + Contact */}
      <div className="flex flex-col sm:flex-row justify-start sm:items-center gap-6 sm:gap-8">
        {/* Sections */}
        <div>
          <h3 className="font-titles text-xl sm:text-2xl font-normal underline pb-2">
            Sections
          </h3>
          <ul>
            <li>
              <button onClick={() => scrollToId("AboutMe")}>About Me</button>
            </li>
            <li>
              <button onClick={() => scrollToId("Skills")}>My Skill</button>
            </li>
            <li>
              <button onClick={() => scrollToId("Work")}>My Work</button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-titles text-xl sm:text-2xl font-normal underline pb-2">
            Contact Me
          </h3>
          <ul>
            <li>
              <a href="mailto:gabriel.bgs00@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gabrielbgutierrez/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/GabrielBG0" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center items-center">
        <Image
          src={starFooter}
          alt="logo"
          className="w-10 h-10 sm:w-auto sm:h-auto"
        />
      </div>

      {/* Copyright */}
      <div className="flex justify-center items-center font-titles text-base sm:text-xl text-center">
        © 2024 - Gabriel Gutierrez
      </div>
    </div>
  );
}
