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
          <a href="mailto:hyunsoo6257@gmail.com">hyunsoo6257@gmail.com</a>
        </p>
        <ContactIcons />
      </header>
    </section>

    <section className="blurb no-divider">
      <h2>About</h2>
      <p>
        Hello, my name is Hyunsoo. I am a final-year Computer Science student
        specializing in full-stack development with a strong focus on frontend
        technologies. Based in Brisbane at
        <a href="https://www.qut.edu.au/"> QUT</a> I am currently seeking new
        opportunities as a Full-Stack developer or Front End developer. My
        expertise includes working with technologies such as React, Node.js,
        Express, MySQL and TypeScript. Additionally, I am currently expanding my
        knowledge in C#, ASP.NET and cloud services like AWS, Azure.
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
