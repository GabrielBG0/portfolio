import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Scroll from "../../svg/Scroll.svg";
import StarVertical from "../../svg/Star-Vertical.svg";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="left">
          <h1>Software Engineering, Machine Learning and Data Science</h1>
          <div>
            <p>Meet Gabriel</p>
            <FaAngleDown />
          </div>
          <img className="scroll" src={Scroll} alt='scroll' />
        </div>
        <img className="hero-design" src={StarVertical} alt="Star" />
      </div>
      <section className="about">
        <div className="left">
          <div className="inner">
            <p className='subtitle'>
              about
            </p>
            <p className="title">
              Hi, I'm Gabriel 🙋‍♂️
            </p>
            <p className="text">
              I'm a software engineer and machine learning enthusiast.
            </p>
          </div>
        </div>

      </section>
    </>
  );
}   