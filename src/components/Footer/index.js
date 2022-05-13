import React from "react";
import Star from "../../svg/Star.svg";
import openInNewTab from "../../openInNewTab";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="left">
        <p>© 2022 Gabriel Gutierrez</p>
      </div>
      <div className="mid">
        <img src={Star} alt="Start" />
      </div>
      <div className="right">
        <ul>
          <li>
            <p onClick={() => openInNewTab("https://github.com/GabrielBG0")} className="link">GitHub</p>
            <p onClick={() => openInNewTab("https://www.linkedin.com/in/gabrielbgutierrez/")} className="link">LinkedIn</p>
            <a href="mailto: gabriel.bgs00@gmail.com" className="link">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
