/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonNoIcon } from "../ButtonNoIcon";
import "./style.css";

export const ButtonLabelOnlyWrapper = ({
  className,
  buttonNoIconText = "Button label",
  buttonNoIconLabelClassName,
}) => {
  return (
    <div className={`button-label-only-wrapper ${className}`}>
      <ButtonNoIcon className="button-px-no-icon" labelClassName={buttonNoIconLabelClassName} text={buttonNoIconText} />
    </div>
  );
};

ButtonLabelOnlyWrapper.propTypes = {
  buttonNoIconText: PropTypes.string,
};
