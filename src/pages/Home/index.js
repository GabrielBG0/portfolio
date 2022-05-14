import React from "react";
import { FaAngleDown, FaCode, FaRobot, FaChartBar } from "react-icons/fa";
import Scroll from "../../svg/Scroll.svg";
import StarVertical from "../../svg/Star-Vertical370.svg";
import charts from "../../svg/charts.svg";
import './index.scss';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="left">
          <h1>Software Engineering,<br />Machine Learning and<br />Data Science</h1>
          <div className="meet">
            <p>Meet Gabriel</p>
            <FaAngleDown className="arrow" />
          </div>
          <img className="scroll" src={Scroll} alt='scroll' />
        </div>
        <div className="right">
          <img src={StarVertical} alt="Star" />
        </div>
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
        <div className="right">
          <h2 className="title">My Interests</h2>
        </div>
      </section>
      <section className="skills">
        <div className="skills-container">
          <ul>
            <li>
              <div className="icon-container">
                <FaCode />
              </div>
              <p className="title">Software<br />Engineering</p>
              <p className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <div className="icon-container">
                <FaRobot />
              </div>
              <p className="title">Machine<br />Learning</p>
              <p className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <div className="icon-container">
                <FaChartBar />
              </div>
              <p className="title">Data<br />Science</p>
              <p className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="projects">
        <div className="projects-container">
          <div className="left">
            <div className="inner">
              <p className="subtitle">Software Engineering</p>
              <p className="title">CookBook 🍜</p>
              <p className="desc">Software Engineering</p>
            </div>
          </div>
          <a href="https://github.com/GabrielBG0/CookBook"> <img className="right" src={charts} alt='charts' /></a>
        </div>
      </section>
      <section className="projects">
        <div className="projects-container">
          <div className="left">
            <div className="inner">
              <p className="subtitle">Data Science</p>
              <p className="title">Australian Fires 🔥</p>
              <p className="desc">Software Engineering</p>
            </div>
          </div>
          <a href="https://github.com/GabrielBG0/CookBook"> <img className="right" src={charts} alt='charts' /></a>
        </div>
      </section>
      <section className="projects">
        <div className="projects-container">
          <div className="left">
            <div className="inner">
              <p className="subtitle">Machine Learning</p>
              <p className="title">Smart Truncation Tool ✂</p>
              <p className="desc">Software Engineering</p>
            </div>
          </div>
          <a href="https://github.com/GabrielBG0/CookBook"> <img className="right" src={charts} alt='charts' /></a>
        </div>
      </section>
      <div className="action">
        <p className="like">Like What Your See?</p>
        <p className="hire"><u>Contact Me!</u></p>
      </div>
    </>
  );
}   