/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonIconButton } from "../ButtonIconButton";
import { WebIconsBackward } from "../WebIconsBackward";
import { WebIconsSearch } from "../WebIconsSearch";
import "./style.css";

export const LeadingIcon = ({
  chooseIcon,
  className,
  webIconsSearchUnion = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-49.svg",
}) => {
  return (
    <div className={`leading-icon ${className}`}>
      {chooseIcon === "search" && <WebIconsSearch union={webIconsSearchUnion} />}

      {chooseIcon === "back" && (
        <ButtonIconButton
          buttonNoText={
            <WebIconsBackward
              className="web-icons-backward-24px-small"
              webIconsBackward="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--small--2.svg"
            />
          }
          className="web-icons-backward-24px-small-wrapper"
          onDark={false}
          size="twenty-four-px"
          state="active"
          style="link"
        />
      )}

      {chooseIcon === "location" && (
        <div className="button-icon-button-3">
          <div className="structure-don-t-copy-4">
            <div className="web-icons-location-wrapper">
              <div className="web-icons-location">
                <img
                  className="union-8"
                  alt="Union"
                  src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-48.svg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

LeadingIcon.propTypes = {
  chooseIcon: PropTypes.oneOf(["search", "location", "back"]),
  webIconsSearchUnion: PropTypes.string,
};
