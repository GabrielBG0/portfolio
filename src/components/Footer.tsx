"use client";
import React from "react";
import Image from "next/image";
import starFooter from "../../public/StarFooter.svg";

export default function Footer() {
  function scrollToId(id: string) {
    const element = document.getElementById(id);
    element!.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="grid grid-cols-3 w-full h-[180px] px-[90px] py-[15px] mt-[90px] rounded-t-[30px] border-t-[2px] border-white">
      <div className="flex justify-start items-center">
        <div className="pr-8">
          <h3 className="font-titles text-2xl font-normal underline pb-2">
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
        <div>
          <h3 className="font-titles text-2xl font-normal underline pb-2">
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
      <div className="flex justify-center items-center">
        <Image src={starFooter} alt="logo" />
      </div>
      <div className="flex justify-center items-center font-titles text-xl">
        © 2023 - Gabriel Gutierrez
      </div>
    </div>
  );
}
