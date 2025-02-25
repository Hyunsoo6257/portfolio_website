import React from "react";
import PropTypes from "prop-types";

const Visa = ({ data }) => (
  <div className="visa">
    <div className="link-to" id="visa" />
    <div className="title">
      <h3>Visa Status</h3>
    </div>
    {data.map((item) => (
      <div key={item.type} className="visa-item">
        <h4>
          {item.type} (Until {item.expiry})
        </h4>
        <p>{item.details}</p>
      </div>
    ))}
  </div>
);

Visa.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      expiry: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    })
  ),
};

Visa.defaultProps = {
  data: [],
};

export default Visa;
