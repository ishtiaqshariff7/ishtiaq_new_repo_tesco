/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonIconButton } from "../ButtonIconButton";
import { ButtonLabelOnly } from "../ButtonLabelOnly";
import { WebIconsSearch } from "../WebIconsSearch";
import "./style.css";

export const SearchButton = ({
  usage,
  className,
  buttonIconButtonButtonPxNoText = (
    <WebIconsSearch union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-108.svg" />
  ),
  buttonIconButtonState = "active",
}) => {
  return (
    <div className={`search-button ${className}`}>
      {["global-2", "inline"].includes(usage) && (
        <ButtonLabelOnly
          buttonNoIconText="Search"
          className={`${usage === "global-2" ? "class-51" : "class-52"}`}
          onDark={false}
          size="forty-px-default"
          state="active"
          style={usage === "global-2" ? "primary" : "secondary"}
        />
      )}

      {usage === "global-1" && (
        <ButtonIconButton
          buttonPxNoText={buttonIconButtonButtonPxNoText}
          onDark={false}
          size="forty-px-default-size"
          state={buttonIconButtonState}
          style="primary"
        />
      )}
    </div>
  );
};

SearchButton.propTypes = {
  usage: PropTypes.oneOf(["global-1", "inline", "global-2"]),
  buttonIconButtonState: PropTypes.string,
};
