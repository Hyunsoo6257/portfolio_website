import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import ContactIcons from "../components/Contact/ContactIcons";

const Contact = () => (
  <Main title="Contact">
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>I would love to hear from you! You can reach me at:</p>
        <p>Email: h28.park@connect.qut.edu.au</p>
        <p>Phone: 0411-026-257</p>
      </div>

      <div className="calendar-container">
        <iframe
          src="https://koalendar.com/e/book-a-phone-call-with-me?embed=true"
          width="100%"
          height="800px"
          frameBorder="0"
          title="Book a phone call with me"
        />
      </div>

      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
