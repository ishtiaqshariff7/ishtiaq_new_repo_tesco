/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonIconButton } from "../ButtonIconButton";
import { ElementWebIconsClose } from "../ElementWebIconsClose";
import "./style.css";

export const Chips = ({
  state,
  className,
  buttonIconButtonButtonNoTextElementWebIconsCloseUnion,
  text = "Chip label",
  buttonIconButtonButtonNoText = (
    <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-262.svg" />
  ),
}) => {
  return (
    <div className={`chips ${state} ${className}`}>
      {["selected-hover", "unselected-disabled", "unselected"].includes(state) && (
        <>
          <div className="text-6">{text}</div>
          <div className="button-icon-button-2">
            <div className="icon-wrapper">
              {["unselected-disabled", "unselected"].includes(state) && (
                <div className="web-icons-add-wrapper">
                  <div className="web-icons-add">
                    <img
                      className="union-4"
                      alt="Union"
                      src={
                        state === "unselected-disabled"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-260.svg"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-264.svg"
                      }
                    />
                  </div>
                </div>
              )}

              {state === "selected-hover" && (
                <img
                  className="icon-22"
                  alt="Icon"
                  src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-302.svg"
                />
              )}
            </div>
          </div>
        </>
      )}

      {state === "unselected-hover" && (
        <div className="label-icon">
          <div className="text-7">{text}</div>
          <div className="button-icon-button-2">
            <div className="structure-don-t-copy-3">
              <div className="web-icons-add-wrapper">
                <div className="web-icons-add">
                  <img
                    className="union-4"
                    alt="Union"
                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-264.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {["selected-disabled", "selected"].includes(state) && (
        <>
          <div className="text-8">{text}</div>
          <ButtonIconButton
            buttonNoText={buttonIconButtonButtonNoText}
            buttonNoTextElementWebIconsCloseUnion={buttonIconButtonButtonNoTextElementWebIconsCloseUnion}
            className="button-icon-button-instance"
            onDark
            size="twenty-four-px"
            state="active"
            style="primary"
          />
        </>
      )}
    </div>
  );
};

Chips.propTypes = {
  state: PropTypes.oneOf([
    "selected-hover",
    "unselected",
    "unselected-disabled",
    "selected",
    "unselected-hover",
    "selected-disabled",
  ]),
  buttonIconButtonButtonNoTextElementWebIconsCloseUnion: PropTypes.string,
  text: PropTypes.string,
};
