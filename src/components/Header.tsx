"use client";
import React from "react";
import Image from "next/image";
import star from "../../public/StarHeader.svg";

export default function Header() {
  function scrollToId(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full h-auto sm:h-[90px] px-6 sm:px-[90px] py-4 sm:py-[15px] mb-[40px] sm:mb-[90px] rounded-b-[30px] border-b-[2px] border-white gap-4 sm:gap-0">
      {/* Logo + Name */}
      <div className="flex justify-center items-center">
        <Image src={star} alt="logo" className="w-8 h-8 sm:w-auto sm:h-auto" />
        <h1 className="pl-3 text-3xl sm:text-5xl font-header tracking-wider text-center sm:text-left">
          Gabriel Gutierrez
        </h1>
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-3 gap-4 sm:gap-[90px] font-titles text-lg sm:text-2xl text-center">
        <button onClick={() => scrollToId("AboutMe")}>About Me</button>
        <button onClick={() => scrollToId("Skills")}>My Skills</button>
        <button onClick={() => scrollToId("Work")}>My Work</button>
      </div>
    </div>
  );
}
