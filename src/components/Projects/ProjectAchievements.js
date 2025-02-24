import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

const ProjectAchievements = ({ data }) => (
  <div className="projects">
    <div className="link-to" id="achievements" />
    <div className="title">
      <h3>Achievements</h3>
    </div>
    {data.map((achievement) => (
      <Cell data={achievement} key={achievement.title} />
    ))}
  </div>
);

ProjectAchievements.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      link: PropTypes.string,
      image: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectAchievements;
