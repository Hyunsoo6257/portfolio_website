import React from "react";
import PropTypes from "prop-types";

import Job from "./Experience/Job";

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    {data.map((job) => (
      <Job data={job} key={`${job.name}-${job.position}`} />
    ))}
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Experience;
