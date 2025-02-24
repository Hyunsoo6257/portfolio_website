import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

const Projects = ({ data }) => (
  <div className="projects">
    <div className="link-to" id="projects" />
    <div className="title">
      <h3>Projects</h3>
    </div>
    {data.map((project) => (
      <Cell data={project} key={project.title} />
    ))}
  </div>
);

Projects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      image: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Projects;
