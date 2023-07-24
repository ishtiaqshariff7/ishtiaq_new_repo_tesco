/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WebIconsContract } from "../WebIconsContract";
import { WebIconsExpand } from "../WebIconsExpand";
import { WebIconsStore } from "../WebIconsStore";
import "./style.css";

export const DropdownMenuItem = ({
  icon = true,
  label = true,
  state,
  device,
  override = (
    <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-45.svg" />
  ),
  text = "Menu label",
  webIconsExpandWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--small--5.svg",
}) => {
  return (
    <div className={`dropdown-menu-item ${state}`}>
      <div className={`icon-and-label ${device}`}>
        {icon && <>{override}</>}

        <div className="container">
          {label && (
            <div className="label-wrapper">
              <div className="text-wrapper">{text}</div>
            </div>
          )}

          {["default", "focus"].includes(state) && (
            <WebIconsExpand className="instance-node" webIconsExpand={webIconsExpandWebIconsExpand} />
          )}

          {state === "active" && (
            <WebIconsContract
              className="instance-node"
              webIconsContract="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--small--2.svg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

DropdownMenuItem.propTypes = {
  icon: PropTypes.bool,
  label: PropTypes.bool,
  state: PropTypes.oneOf(["active", "focus", "default"]),
  device: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  webIconsExpandWebIconsExpand: PropTypes.string,
};
