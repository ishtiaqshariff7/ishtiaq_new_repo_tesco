/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WebIconsStore } from "../WebIconsStore";
import "./style.css";

export const MenuItemToolkit = ({
  icon = true,
  borderRight = true,
  label = true,
  borderLeft = true,
  state,
  device,
  override = (
    <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-45.svg" />
  ),
  text = "Menu label",
}) => {
  return (
    <div className={`menu-item-toolkit state-23-${state}`}>
      <div className={`icon-and-label-2 device-${device}`}>
        {icon && <>{override}</>}

        {label && (
          <div className="label-11">
            <div className="label-12">{text}</div>
          </div>
        )}
      </div>
    </div>
  );
};

MenuItemToolkit.propTypes = {
  icon: PropTypes.bool,
  borderRight: PropTypes.bool,
  label: PropTypes.bool,
  borderLeft: PropTypes.bool,
  state: PropTypes.oneOf(["active", "focus", "default"]),
  device: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
};
