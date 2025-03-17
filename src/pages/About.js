/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import about from "../data/about.md";
import Main from "../layouts/Main";

const About = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(about)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch(() => setMarkdown("Failed to load about content."));
  }, []);

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ""))
    .filter((s) => s.length).length;

  return (
    <Main title="About">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
      </article>
    </Main>
  );
};

export default About;
