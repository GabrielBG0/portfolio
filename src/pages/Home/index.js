import React, { useState } from "react";
import { FaAngleDown, FaCode, FaRobot, FaChartBar, FaCheck } from "react-icons/fa";
import Scroll from "../../svg/Scroll.svg";
import StarVertical from "../../svg/Star-Vertical370.svg";
import charts from "../../svg/charts.svg";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import * as emailjs from "emailjs-com";
import { publicKey, templateId } from "../../keys";
import './index.scss';

export default function Home() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const starVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  }

  const scrollVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }

  const meetVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  }

  function isDescktop() {
    return window.innerWidth > 1099;
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!(fullName !== '' && email !== '' && message !== '')) {
      alert("Please fill out all fields")
      return;
    }


    emailjs.sendForm('gmail', templateId, e.target, publicKey).then((result) => {
      alert("Message Sent, I will get back to you shortly");
      setSent(true)
    }, (error) => {
      alert("There was an error sending your message, please try again later");
    });
  }
  return (
    <>
      <div className="hero">
        <div className="left">
          <Parallax disabled={isDescktop() ? false : true} className={{ marginTop: '3em' }} speed={-10}>
            <motion.h1 initial='hidden' animate='visible' variants={scrollVariants} transition={{ duration: 1.5 }}>Software Engineering,<br />Machine Learning and<br />Data Science</motion.h1>
            <motion.div initial='hidden' animate='visible' variants={isDescktop() ? scrollVariants : meetVariants} transition={{ duration: 1.5 }} className="meet">
              <p>Meet Gabriel</p>
              <motion.span animate={{ y: [0, -10, 0, -10, 0] }} transition={{ delay: 1.55 }} className="arrow"><FaAngleDown /></motion.span>
            </motion.div>
            <motion.img initial='hidden' animate='visible' variants={scrollVariants} transition={{ duration: 1.5 }} className="scroll" src={Scroll} alt='scroll' />
          </Parallax>
        </div>
        <motion.div initial='hidden' animate='visible' variants={starVariants} transition={{ duration: 1.5 }} className="right">
          <img src={StarVertical} alt="Star" />
        </motion.div>

      </div>
      <section id="about" className="about">
        <div className="left">

          <Parallax disabled={isDescktop() ? false : true} translateX={['-500px', '0px']}
            easing="easeInQuad"
            startScroll={100}
            endScroll={800}
          >
            <p className='subtitle'>
              about
            </p>
            <p className="title">
              Hi, I'm Gabriel 🙋‍♂️
            </p>
            <p className="text">
              I'm a software engineer and machine learning enthusiast.
            </p>
          </Parallax>
        </div>
        <Parallax disabled={isDescktop() ? false : true} translateX={['500px', '0px']}
          easing="easeInQuad"
          startScroll={100}
          endScroll={800}
          className="right">
          <h2 className="title">My Interests</h2>
        </Parallax>
      </section>
      <section id="skills" className="skills">
        <div className="skills-container">
          <Parallax disabled={isDescktop() ? false : true}
            translateY={['-100px', '0px']}
            opacity={[0, 1]}
            easing="easeInQuad"
            startScroll={900}
            endScroll={1500}>
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
          </Parallax>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="left">
            <Parallax disabled={isDescktop() ? false : true} translateY={['-100px', '0px']} startScroll={1700}
              endScroll={2000} className="inner">
              <p className="subtitle">Software Engineering</p>
              <p className="title">CookBook 🍜</p>
              <p className="desc">Software Engineering</p>
            </Parallax>
          </div>
          <a href="https://github.com/GabrielBG0/CookBook"> <img className="right" src={charts} alt='charts' /></a>
        </div>
      </section>
      <section className="projects">
        <div className="projects-container">
          <div className="left">
            <Parallax disabled={isDescktop() ? false : true} translateY={['-100px', '0px']} startScroll={2300}
              endScroll={2600} className="inner">
              <p className="subtitle">Data Science</p>
              <p className="title">Australian Fires 🔥</p>
              <p className="desc">Software Engineering</p>
            </Parallax>
          </div>
          <a href="https://github.com/GabrielBG0/CookBook"> <img className="right" src={charts} alt='charts' /></a>
        </div>
      </section>
      <section className="projects">
        <div className="projects-container">
          <div className="left">
            <Parallax disabled={isDescktop() ? false : true} translateY={['-100px', '0px']} startScroll={2900}
              endScroll={3200} className="inner">
              <p className="subtitle">Machine Learning</p>
              <p className="title">Smart Truncation Tool ✂</p>
              <p className="desc">Software Engineering</p>
            </Parallax>
          </div>
          <a href="https://github.com/GabrielBG0/CookBook"> <img className="right" src={charts} alt='charts' /></a>
        </div>
      </section>
      <div id="hire" className="action">
        <p className="like">Like What Your See?</p>
        <p className="hire"><u>Contact Me!</u></p>
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <input value={fullName} onChange={(e) => { setFullName(e.target.value) }} name='fullname' type="text" placeholder="Full Name*" />
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' type="email" placeholder="Email*" />
            <input value={phone} onChange={(e) => { setPhone(e.target.value) }} name='phone' type="text" placeholder="Phone" />
            <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} name='message' placeholder="Message*"></textarea>
          </form>
          <div className="button-container">
            <button className={{ cursor: sent ? 'default' : 'pointer' }} type={sent ? 'button' : 'submit'}>{sent ? <FaCheck /> : 'Send'}</button>
          </div>
        </div>
      </div>
    </>
  );
}   