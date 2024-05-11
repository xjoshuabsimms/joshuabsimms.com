import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal/Fade";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = ({ data }) => {
  if (!data) return null;

  const { github, image, linkedin, name, description } = data;
  const profilepic = `images/${image}`;

  return (
    <header id="home">
      <ParticlesBg type="random" bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              Experience
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <div id="picture" className="profile-pic">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Profile Pic"
              />
            </div>
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{description}</h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a href={linkedin} className="button btn github-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={github} className="button btn github-btn">
                <FaGithub /> GitHub
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
