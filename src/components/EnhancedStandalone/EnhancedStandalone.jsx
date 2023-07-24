/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WebIconsBackwardWrapper } from "../WebIconsBackwardWrapper";
import "./style.css";

export const EnhancedStandalone = ({
  className,
  override = (
    <WebIconsBackwardWrapper
      className="web-icons-backward-instance"
      webIconsBackward="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--default--2.svg"
    />
  ),
  textClassName,
  text = "Link Label",
}) => {
  return (
    <div className={`enhanced-standalone ${className}`}>
      {override}
      <div className="label-20">
        <div className={`text-15 ${textClassName}`}>{text}</div>
      </div>
    </div>
  );
};

EnhancedStandalone.propTypes = {
  text: PropTypes.string,
};
