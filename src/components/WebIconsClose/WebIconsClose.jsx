/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const WebIconsClose = ({
  union = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-311.svg",
}) => {
  return (
    <div className="web-icons-close">
      <img className="union-11" alt="Union" src={union} />
    </div>
  );
};

WebIconsClose.propTypes = {
  union: PropTypes.string,
};
