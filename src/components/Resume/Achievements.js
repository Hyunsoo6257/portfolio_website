import React from "react";
import PropTypes from "prop-types";

const Achievements = ({ data }) => (
  <div className="education">
    <div className="link-to" id="achievements" />
    <div className="title">
      <h3>Achievements</h3>
    </div>
    {data.map((achievement) => (
      <article className="degree-container" key={achievement.title}>
        <header>
          <h4 className="degree">{achievement.title}</h4>
          <p className="school">
            <span className="emoji">{achievement.emoji}</span>{" "}
            {achievement.description}
          </p>
          <p className="year">{achievement.date}</p>
        </header>
      </article>
    ))}
  </div>
);

Achievements.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      emoji: PropTypes.string,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Achievements;
