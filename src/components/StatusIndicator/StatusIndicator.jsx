/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StatusIndicator = ({ state, className }) => {
  return <div className={`status-indicator ${state} ${className}`} />;
};

StatusIndicator.propTypes = {
  state: PropTypes.oneOf(["warning", "amend", "information", "pending", "success", "error"]),
};
