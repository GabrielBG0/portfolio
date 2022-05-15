import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './index.scss';

export default function Header() {
  function scrollToId(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <nav className="header">
      <div className="left">
        <Link to="/">
          <h1>Gabriel Gutierrez</h1>
        </Link>
        <div className="nav-elements">
          <div>
            <button onClick={() => scrollToId('skills')}>My Skills</button>
          </div>
          <div>
            <button onClick={() => scrollToId('projects')}>My Work</button>
          </div>
          <div>
            <button onClick={() => scrollToId('hire')}>Hire Me</button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="social-media">
          <FaGithub className="icon" />
        </div>
        <div className="social-media">
          <FaLinkedin className="icon" />
        </div>
        <div className="social-media">
          <FaEnvelope className="icon" />
        </div>
      </div>
    </nav>
  )
}