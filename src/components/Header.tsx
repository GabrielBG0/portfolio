"use client";
import React from "react";
import Image from "next/image";
import star from "../../public/StarHeader.svg";

export default function Header() {
  function scrollToId(id: string) {
    const element = document.getElementById(id);
    element!.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="flex justify-between items-center w-full h-[90px] px-[90px] py-[15px] mb-[90px] rounded-b-[30px] border-b-[2px] border-white">
      <div className="flex justify-center items-center">
        <Image src={star} alt="logo" />
        <h1 className="pl-[15px] text-5xl font-header tracking-wider">
          Gabriel Gutierrez
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-[90px] font-titles text-2xl">
        <div>
          <button onClick={() => scrollToId("AboutMe")}>About Me</button>
        </div>
        <div>
          <button onClick={() => scrollToId("Skills")}>My Skills</button>
        </div>
        <div>
          <button onClick={() => scrollToId("Work")}>My Work</button>
        </div>
      </div>
    </div>
  );
}
