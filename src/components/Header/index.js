import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './index.scss';

export default function Header() {
  return (
    <nav className="header">
      <div className="left">
        <Link to="/">
          <h1>Gabriel Gutierrez</h1>
        </Link>
        <div className="nav-elements">
          <div>
            <p>My Skills</p>
          </div>
          <div>
            <p>My Work</p>
          </div>
          <div>
            <p>Hire Me</p>
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