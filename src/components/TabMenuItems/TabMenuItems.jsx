/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WebIconsExpandWrapper } from "../WebIconsExpandWrapper";
import "./style.css";

export const TabMenuItems = ({
  state,
  width,
  className,
  webIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
  webIconsContract = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--2.svg",
}) => {
  return (
    <div className={`tab-menu-items ${state} ${className}`}>
      <div className="label-2">
        {["active-selected", "hover-selected"].includes(state) && (
          <>
            <div className="copy">
              <div className="container-3">
                <div className="tab-label">Tab label</div>
                <img className="web-icons-contract-2" alt="Web icons contract" src={webIconsContract} />
              </div>
            </div>
            <div className="highlight-bar" />
          </>
        )}

        {["disabled", "hover", "inactive"].includes(state) && (
          <div className="label-3">
            <div className="tab-label-2">Tab label</div>
            <WebIconsExpandWrapper
              className="web-icons-expand-24px-default"
              webIconsExpand={webIconsExpandWrapperWebIconsExpand}
            />
          </div>
        )}
      </div>
    </div>
  );
};

TabMenuItems.propTypes = {
  state: PropTypes.oneOf(["inactive", "active-selected", "hover-selected", "hover", "disabled"]),
  width: PropTypes.oneOf(["default"]),
  webIconsExpandWrapperWebIconsExpand: PropTypes.string,
  webIconsContract: PropTypes.string,
};
