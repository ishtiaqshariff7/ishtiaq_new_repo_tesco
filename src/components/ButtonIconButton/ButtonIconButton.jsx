/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonNoText } from "../ButtonNoText";
import { ButtonPxNoText } from "../ButtonPxNoText";
import { ElementWebIconsClose } from "../ElementWebIconsClose";
import { WebIconsClose } from "../WebIconsClose";
import "./style.css";

export const ButtonIconButton = ({
  style,
  onDark,
  state,
  size,
  className,
  buttonNoTextElementWebIconsCloseUnion,
  buttonNoText = (
    <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-313.svg" />
  ),
  buttonPxNoText = (
    <WebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-332.svg" />
  ),
}) => {
  return (
    <div className={`button-icon-button on-dark-4-${onDark} state-7-${state} ${size} style-3-${style} ${className}`}>
      {((size === "forty-px-default-size" && state === "active-focus") ||
        (size === "forty-px-default-size" && state === "active") ||
        (size === "forty-px-default-size" && state === "disabled") ||
        (size === "forty-px-default-size" && state === "selected-focus") ||
        (size === "forty-px-default-size" && state === "selected")) && (
        <ButtonPxNoText
          className={`${
            state === "active" && style === "primary" && !onDark
              ? "class-20"
              : state === "selected"
              ? "class-21"
              : style === "primary" && state === "active-focus" && !onDark
              ? "class-22"
              : state === "selected-focus"
              ? "class-23"
              : style === "primary" && state === "disabled" && !onDark
              ? "class-24"
              : style === "primary" && state === "disabled" && onDark
              ? "class-25"
              : state === "active" && (onDark || style === "secondary") && (!onDark || style === "primary")
              ? "class-26"
              : style === "primary" && state === "active-focus" && onDark
              ? "class-27"
              : style === "secondary" && state === "active-focus" && !onDark
              ? "class-28"
              : style === "link" && state === "active-focus" && !onDark
              ? "class-29"
              : style === "secondary" && state === "disabled" && !onDark
              ? "class-30"
              : onDark && state === "active-focus" && ["link", "secondary"].includes(style)
              ? "class-31"
              : style === "secondary" && state === "disabled" && onDark
              ? "class-32"
              : "class-33"
          }`}
          iconClassName={`${
            !onDark && style === "secondary" && ["active-focus", "active"].includes(state) && "class-34"
          } ${onDark && style === "secondary" && ["active-focus", "active"].includes(state) && "class-35"}`}
          override={buttonPxNoText}
        />
      )}

      {((size === "thirty-two-px" && state === "active-focus") ||
        (size === "thirty-two-px" && state === "active") ||
        (size === "thirty-two-px" && state === "disabled") ||
        (size === "thirty-two-px" && state === "selected-focus") ||
        (size === "thirty-two-px" && state === "selected") ||
        state === "loading") && (
        <div className="spinner-wrapper">
          <div className="spinner-2">
            {state === "loading" && (
              <div className="load-wrapper">
                <img
                  className="load-2"
                  alt="Load"
                  src={
                    size === "thirty-two-px" && !onDark
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25--23.svg"
                      : size === "twenty-four-px" && !onDark
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25--22.svg"
                      : size === "forty-px-default-size" && onDark
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25--21.svg"
                      : size === "thirty-two-px" && onDark
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25--20.svg"
                      : size === "twenty-four-px" && onDark
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25--19.svg"
                      : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25--25.svg"
                  }
                />
              </div>
            )}

            {["active-focus", "active", "disabled", "selected-focus", "selected"].includes(state) && (
              <ElementWebIconsClose
                union={
                  (!onDark && state === "active-focus" && style === "primary") ||
                  (!onDark && state === "active" && style === "primary") ||
                  (onDark && state === "active-focus" && style === "link") ||
                  (onDark && state === "active-focus" && style === "secondary") ||
                  (onDark && state === "active" && style === "link") ||
                  (onDark && state === "active" && style === "secondary") ||
                  state === "selected-focus" ||
                  state === "selected"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-329.svg"
                    : state === "disabled" && !onDark
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-313.svg"
                    : (!onDark && state === "active-focus" && style === "link") ||
                      (!onDark && state === "active-focus" && style === "secondary") ||
                      (!onDark && state === "active" && style === "link") ||
                      (!onDark && state === "active" && style === "secondary") ||
                      (onDark && style === "primary")
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-310.svg"
                    : onDark && state === "disabled" && ["link", "secondary"].includes(style)
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-270.svg"
                    : undefined
                }
              />
            )}
          </div>
        </div>
      )}

      {((size === "twenty-four-px" && state === "active-focus") ||
        (size === "twenty-four-px" && state === "active") ||
        (size === "twenty-four-px" && state === "disabled") ||
        (size === "twenty-four-px" && state === "selected-focus") ||
        (size === "twenty-four-px" && state === "selected")) && (
        <ButtonNoText
          className={`${
            state === "active" && style === "primary" && !onDark
              ? "class-36"
              : state === "selected"
              ? "class-21"
              : style === "primary" && state === "active-focus" && !onDark
              ? "class-37"
              : state === "selected-focus"
              ? "class-38"
              : style === "primary" && state === "disabled" && !onDark
              ? "class-24"
              : style === "primary" && state === "disabled" && onDark
              ? "class-25"
              : state === "active" && style === "primary" && onDark
              ? "class-26"
              : style === "primary" && state === "active-focus" && onDark
              ? "class-39"
              : state === "active" && style === "secondary" && !onDark
              ? "class-40"
              : style === "link" && ["active", "disabled"].includes(state)
              ? "class-33"
              : style === "secondary" && state === "active-focus" && !onDark
              ? "class-41"
              : style === "link" && state === "active-focus" && !onDark
              ? "class-42"
              : style === "secondary" && state === "disabled" && !onDark
              ? "class-30"
              : state === "active" && style === "secondary" && onDark
              ? "class-43"
              : style === "secondary" && state === "disabled" && onDark
              ? "class-32"
              : "class-44"
          }`}
          elementWebIconsCloseUnion={buttonNoTextElementWebIconsCloseUnion}
          iconClassName={`${style === "secondary" && state === "active-focus" && !onDark && "class-34"} ${
            style === "secondary" && state === "active-focus" && onDark && "class-35"
          }`}
          override={buttonNoText}
        />
      )}
    </div>
  );
};

ButtonIconButton.propTypes = {
  style: PropTypes.oneOf(["primary", "link", "secondary"]),
  onDark: PropTypes.bool,
  state: PropTypes.oneOf(["active", "active-focus", "selected", "selected-focus", "loading", "disabled"]),
  size: PropTypes.oneOf(["thirty-two-px", "forty-px-default-size", "twenty-four-px"]),
  buttonNoTextElementWebIconsCloseUnion: PropTypes.string,
};
