/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonNoIcon } from "../ButtonNoIcon";
import "./style.css";

export const ButtonLabelOnly = ({ style, onDark, state, size, className, buttonNoIconText = "Button label" }) => {
  return (
    <div className={`button-label-only on-dark-${onDark} state-3-${state} ${style} ${size} ${className}`}>
      {((size === "forty-px-default" && state === "active-focus") ||
        (size === "forty-px-default" && state === "active") ||
        (size === "forty-px-default" && state === "disabled") ||
        (size === "forty-px-default" && state === "selected-focus") ||
        (size === "forty-px-default" && state === "selected")) && (
        <ButtonNoIcon
          className={`${
            ["selected-focus", "selected"].includes(state)
              ? "class-10"
              : style === "primary" && state === "disabled" && !onDark
              ? "class-11"
              : onDark && style === "primary" && ["active-focus", "active"].includes(state)
              ? "class-12"
              : !onDark && style === "secondary" && ["active-focus", "active"].includes(state)
              ? "class-13"
              : style === "primary" && state === "disabled" && onDark
              ? "class-14"
              : style === "secondary" && state === "disabled" && !onDark
              ? "class-15"
              : onDark && style === "secondary" && ["active-focus", "active"].includes(state)
              ? "class-16"
              : style === "secondary" && state === "disabled" && onDark
              ? "class-17"
              : "class-18"
          }`}
          text={buttonNoIconText}
          textClassName={`${
            ((!onDark && state === "active-focus" && style === "primary") ||
              (onDark && state === "active-focus" && style === "secondary") ||
              state === "selected-focus") &&
            "class-5"
          } ${state === "disabled" && !onDark && "class-6"} ${
            ((!onDark && state === "active" && style === "secondary") ||
              (onDark && state === "active" && style === "primary") ||
              (onDark && state === "disabled" && style === "primary")) &&
            "class-7"
          } ${
            state === "active-focus" &&
            (onDark || style === "secondary") &&
            (!onDark || style === "primary") &&
            "class-8"
          } ${style === "secondary" && state === "disabled" && onDark && "class-9"}`}
        />
      )}

      {(size === "thirty-two-px" || (size === "forty-px-default" && state === "loading")) && (
        <div className="structure-don-t-copy">
          <div className="loading-spinner-icon">
            <div className="spinner">
              {state === "loading" && (
                <div className="indicator">
                  <img
                    className="load"
                    alt="Load"
                    src={
                      size === "forty-px-default" &&
                      (onDark || style === "secondary") &&
                      (!onDark || style === "primary")
                        ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25--22.svg"
                        : size === "thirty-two-px" && style === "primary" && !onDark
                        ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25--5.svg"
                        : size === "thirty-two-px" &&
                          (onDark || style === "secondary") &&
                          (!onDark || style === "primary")
                        ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25--4.svg"
                        : size === "thirty-two-px" && style === "secondary" && onDark
                        ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---75-.svg"
                        : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25--19.svg"
                    }
                  />
                </div>
              )}

              {["active-focus", "active", "disabled", "selected-focus", "selected"].includes(state) && (
                <>Button label</>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ButtonLabelOnly.propTypes = {
  style: PropTypes.oneOf(["primary", "secondary"]),
  onDark: PropTypes.bool,
  state: PropTypes.oneOf(["active", "active-focus", "selected", "selected-focus", "loading", "disabled"]),
  size: PropTypes.oneOf(["thirty-two-px", "forty-px-default"]),
  buttonNoIconText: PropTypes.string,
};
