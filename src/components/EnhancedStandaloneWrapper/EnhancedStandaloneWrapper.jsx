/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WebIconsForward } from "../WebIconsForward";
import "./style.css";

export const EnhancedStandaloneWrapper = ({
  text = "Link Label",
  className,
  webIconsForwardWebIconsForward = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--small--1.svg",
  textClassName,
}) => {
  return (
    <div className={`enhanced-standalone-wrapper ${className}`}>
      <div className="label-23">
        <div className={`text-18 ${textClassName}`}>{text}</div>
      </div>
      <WebIconsForward className="web-icons-forward-24px-small" webIconsForward={webIconsForwardWebIconsForward} />
    </div>
  );
};

EnhancedStandaloneWrapper.propTypes = {
  text: PropTypes.string,
  webIconsForwardWebIconsForward: PropTypes.string,
};
