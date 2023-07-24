/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WebIconsExpandWrapper } from "../WebIconsExpandWrapper";
import "./style.css";

export const AtomsDropdowIcons = ({
  className,
  webIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--83.svg",
}) => {
  return (
    <div className={`atoms-dropdow-icons ${className}`}>
      <WebIconsExpandWrapper
        className="web-icons-expand-24px-default-instance"
        webIconsExpand={webIconsExpandWrapperWebIconsExpand}
      />
    </div>
  );
};

AtomsDropdowIcons.propTypes = {
  webIconsExpandWrapperWebIconsExpand: PropTypes.string,
};
