import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import xLight from "../../assets/twitter-light.svg";
import xDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const xIcon = theme === "light" ? xLight : xDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className="container">
      <div className="colorModeContainer">
        <img src={heroImg} alt="Picture of Ankit Narwal" className="hero" />
        <img src={themeIcon} className="colorMode" onClick={toggleTheme} />
      </div>
      <div className="info">
        <h1>
          Ankit <br />
          Narwal
        </h1>
        <h2>Frontend Developer</h2>
        <spna>
          <a href="https://www.linkedin.com/in/ankitxnarwal/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
          <a href="https://github.com/anktxnarwal" target="_blank">
            <img src={githubIcon} alt="Github" />
          </a>
          <a href="https://x.com/ankitxnarwal" target="_blank">
            <img src={xIcon} alt="X" />
          </a>
        </spna>
        <p className="description">
          Pro in React, Tailwind CSS, and JavaScript. Creates modern, responsive
          web apps.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
