import React, { useState } from "react";
import { FaAngleDown, FaCode, FaRobot, FaChartBar, FaCheck } from "react-icons/fa";
import Scroll from "../../svg/Scroll.svg";
import StarVertical from "../../svg/Star-Vertical370.svg";
import charts from "../../svg/charts.svg";
import cookBook from "../../svg/CookBook.svg";
import ITT from "../../svg/ITT.svg";
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
            <motion.h1 initial='hidden' animate='visible' variants={scrollVariants} transition={{ duration: 1 }}>Software Engineering,<br />Machine Learning and<br />Data Science</motion.h1>
            <motion.div initial='hidden' animate='visible' variants={isDescktop() ? scrollVariants : meetVariants} transition={{ duration: 1 }} className="meet">
              <p>Meet Gabriel</p>
              <motion.span animate={{ y: [0, -10, 0, -10, 0] }} transition={{ delay: 1.05 }} className="arrow"><FaAngleDown /></motion.span>
            </motion.div>
            <motion.img initial='hidden' animate='visible' variants={scrollVariants} transition={{ duration: 1 }} className="scroll" src={Scroll} alt='scroll' />
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
            endScroll={400}
          >
            <p className='subtitle'>
              about
            </p>
            <p className="title">
              Hi, I'm Gabriel 🙋‍♂️
            </p>
            <p className="text">
              I'm a junior Software Engineer and Machine Learning enthusiast. I’m currently based in Brazil, but looking for international opportunities too. My fields of interest are Web Development, Machine Learning and, most recently, Data Science.<br /> I’m currently researching fake news detection with NLP and Deep Learning algorithms like BERT within my univercity, UFMS.
            </p>
          </Parallax>
        </div>
        <Parallax disabled={isDescktop() ? false : true} translateX={['500px', '0px']}
          easing="easeInQuad"
          startScroll={100}
          endScroll={400}
          className="right">
          <h2 className="title">My Tool Set</h2>
          <div className="interests">
            <ul>
              <li>JavaScrip</li>
              <li>Python</li>
              <li>Rust</li>
              <li>C#</li>
              <li>Java</li>
              <li>SQL</li>
              <li>PyTorch</li>
              <li>Hugging Face</li>
              <li>Scikit Learn</li>
              <li>TensorFlow</li>
              <li>Pandas</li>
              <li>Seaborn</li>
              <li>React</li>
              <li>SASS</li>
              <li>NodeJs</li>
            </ul>
          </div>
        </Parallax>
      </section>
      <section id="skills" className="skills">
        <div className="skills-container">
          <Parallax disabled={isDescktop() ? false : true}
            translateY={['-100px', '0px']}
            opacity={[0, 1]}
            easing="easeInQuad"
            startScroll={900}
            endScroll={1100}>
            <ul>
              <li>

                <div className="icon-container">
                  <FaCode />
                </div>
                <p className="title">Software<br />Engineering</p>
                <p className="desc">Web Development, System Architecture and Back and Front End Development
                  are some of the skills I developed in the area of Software Engineering,
                  with a greater focus on web dev.</p>

              </li>
              <li>
                <div className="icon-container">
                  <FaRobot />
                </div>
                <p className="title">Machine<br />Learning</p>
                <p className="desc">Machine learning is the field where I have the most experience in.
                  As a junior researcher at the UFMS’ Artificial Intelligence Lab I’ve researched fake news
                  detection and ways to improve BERT’s text classification.</p>
              </li>
              <li>
                <div className="icon-container">
                  <FaChartBar />
                </div>
                <p className="title">Data<br />Science</p>
                <p className="desc">Data Science is my newest passion. Prediction, Data Analysis and Data Warehousing are some of the things I’m Learning to do.
                  As my newest interest field, Data Science has interested me a lot,
                  and it has been very fun to learn about it.</p>
              </li>
            </ul>
          </Parallax>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="left">
            <div className="inner">
              <p className="subtitle">Software Engineering</p>
              <p className="title">CookBook 🍜</p>
              <p className="desc">Software Engineering</p>
            </div>
          </div>
          <a href="https://github.com/GabrielBG0/CookBook"> <img className="right" src={cookBook} alt='charts' /></a>
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
          <a href="https://github.com/GabrielBG0/CookBook"> <img className="right" src={ITT} alt='charts' /></a>
        </div>
      </section>
      <div id="hire" className="action">
        <p className="like">Like What You See?</p>
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