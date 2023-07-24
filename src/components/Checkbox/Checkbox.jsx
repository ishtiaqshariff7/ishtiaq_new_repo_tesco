/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Checkbox = ({
  className,
  selectorClassName,
  copyClassName,
  descriptionClassName,
  text = "Checkbox with text that can go into multiple lines as per the content.",
}) => {
  return (
    <div className={`checkbox ${className}`}>
      <div className={`selector ${selectorClassName}`} />
      <div className={`description-wrapper ${copyClassName}`}>
        <p className={`description ${descriptionClassName}`}>{text}</p>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  text: PropTypes.string,
};
