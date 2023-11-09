import React from "react";
import Image from "next/image";
import starFooter from "../../public/StarFooter.svg";

export default function Footer() {
  return (
    <div className="grid grid-cols-3 w-full h-[180px] px-[90px] py-[15px] mt-[90px] rounded-t-[30px] border-t-[2px] border-white">
      <div className="flex justify-start items-center">
        <div>Sections</div>
        <div>Contact</div>
      </div>
      <div className="flex justify-center items-center">
        <Image src={starFooter} alt="logo" />
      </div>
      <div className="flex justify-center items-center">
        © 2023 - Gabriel Gutierrez
      </div>
    </div>
  );
}
