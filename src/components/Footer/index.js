import React from "react";
import Star from "../../svg/Star.svg";
import openInNewTab from "../../openInNewTab";
import './index.scss';

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
        <div className="links">
          <div><p onClick={() => openInNewTab("https://github.com/GabrielBG0")} className="link">GitHub</p></div>
          <div><p onClick={() => openInNewTab("https://www.linkedin.com/in/gabrielbgutierrez/")} className="link">LinkedIn</p></div>
          <div><p onClick={() => openInNewTab("https://www.kaggle.com/gabrielbgutierrez")} className="link">Kaggle</p></div>
        </div>
      </div>
    </footer>
  )
}
