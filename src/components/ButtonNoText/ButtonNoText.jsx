/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ElementWebIconsClose } from "../ElementWebIconsClose";
import "./style.css";

export const ButtonNoText = ({
  className,
  elementWebIconsCloseUnion = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-266.svg",
  override = <ElementWebIconsClose union={elementWebIconsCloseUnion} />,
  iconClassName,
}) => {
  return (
    <div className={`button-no-text ${className}`}>
      <div className={`icon-21 ${iconClassName}`}>{override}</div>
    </div>
  );
};

ButtonNoText.propTypes = {
  elementWebIconsCloseUnion: PropTypes.string,
};
