import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const CoverageChartLegend = props => {
  return (
    <div className="legend-row">
      <div
        style={{ height: "15px", width: "20px", backgroundColor: props.colour }}
      />
      <div className="legend-row-contentBox">{props.content}</div>
    </div>
  );
};

CoverageChartLegend.propTypes = {
  colour: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
export default CoverageChartLegend;
