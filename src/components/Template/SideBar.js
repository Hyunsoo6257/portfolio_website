import React from "react";
import { Link } from "react-router-dom";
import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Hyunsoo Park</h2>
        <p>
          <a href="mailto:h28.park@connect.qut.edu.au">
            h28.park@connect.qut.edu.au
          </a>
        </p>
        <ContactIcons />
      </header>
    </section>

    <section className="blurb no-divider">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Hyunsoo. I am a final year student at{" "}
        <a href="https://www.qut.edu.au/">QUT</a> studying Computer Science,
        currently seeking new opportunities as a Full stack developer.
        Previously, I worked at Fields Software Company until 2023, specializing
        in front-end development with React. I also have experience as a Housing
        Management Specialist in the public sector at the Korea Government.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
