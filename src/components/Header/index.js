import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="header">
      <div className="left">
        <Link to="/">
          <h1>Gabriel B Gutierrez</h1>
        </Link>
        <div className="nav-elements">
          <p>My Skills</p>
          <p>My Work</p>
          <p>Hire Me</p>
        </div>
      </div>
      <div className="right">
        <FaGithub />
        <FaLinkedin />
        <FaEnvelope />
      </div>
    </nav>
  )
}