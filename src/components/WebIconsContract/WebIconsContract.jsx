/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const WebIconsContract = ({
  className,
  webIconsContract = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--small-.svg",
}) => {
  return <img className={`web-icons-contract ${className}`} alt="Web icons contract" src={webIconsContract} />;
};

WebIconsContract.propTypes = {
  webIconsContract: PropTypes.string,
};
