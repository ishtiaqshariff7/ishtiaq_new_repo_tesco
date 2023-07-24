/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { WebIconsClose } from "../WebIconsClose";
import "./style.css";

export const ButtonPxNoText = ({
  className,
  override = (
    <WebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-332.svg" />
  ),
  iconClassName,
}) => {
  return (
    <div className={`button-px-no-text ${className}`}>
      <div className={`web-icons-close-wrapper ${iconClassName}`}>{override}</div>
    </div>
  );
};
