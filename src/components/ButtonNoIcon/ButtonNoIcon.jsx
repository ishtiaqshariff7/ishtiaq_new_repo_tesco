/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonNoIcon = ({ className, text = "Button label", labelClassName, textClassName }) => {
  return (
    <div className={`button-no-icon ${className}`}>
      <div className={`div-wrapper ${labelClassName}`}>
        <div className={`text-2 ${textClassName}`}>{text}</div>
      </div>
    </div>
  );
};

ButtonNoIcon.propTypes = {
  text: PropTypes.string,
};
