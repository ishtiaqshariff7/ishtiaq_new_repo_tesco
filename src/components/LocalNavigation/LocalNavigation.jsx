/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WebIconsExpandWrapper } from "../WebIconsExpandWrapper";
import "./style.css";

export const LocalNavigation = ({
  type,
  state,
  className,
  text = "Menu item",
  webIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--74.svg",
  webIconsContract = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--12.svg",
  text1 = "Menu",
}) => {
  return (
    <div className={`local-navigation state-1-${state} type-${type} ${className}`}>
      {type === "default" && (
        <div className="label-4">
          <div className="text-3">{text}</div>
        </div>
      )}

      {state === "default" && type === "dropdown" && (
        <>
          <div className="text-4">{text1}</div>
          <WebIconsExpandWrapper
            className="web-icons-expand-instance"
            webIconsExpand={webIconsExpandWrapperWebIconsExpand}
          />
        </>
      )}

      {type === "dropdown" && state === "selected" && (
        <>
          <div className="text-5">{text1}</div>
          <img className="web-icons-contract-3" alt="Web icons contract" src={webIconsContract} />
        </>
      )}
    </div>
  );
};

LocalNavigation.propTypes = {
  type: PropTypes.oneOf(["dropdown", "default"]),
  state: PropTypes.oneOf(["selected", "default"]),
  text: PropTypes.string,
  webIconsExpandWrapperWebIconsExpand: PropTypes.string,
  webIconsContract: PropTypes.string,
  text1: PropTypes.string,
};
