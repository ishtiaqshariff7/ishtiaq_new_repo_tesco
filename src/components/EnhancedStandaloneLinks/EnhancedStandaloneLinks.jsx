/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { EnhancedStandalone } from "../EnhancedStandalone";
import { EnhancedStandaloneWrapper } from "../EnhancedStandaloneWrapper";
import { WebIconsBackward } from "../WebIconsBackward";
import { WebIconsBackwardWrapper } from "../WebIconsBackwardWrapper";
import "./style.css";

export const EnhancedStandaloneLinks = ({
  iconPosition,
  state,
  fontSize,
  inverse,
  className,
  enhancedStandaloneText = "Link Label",
  enhancedStandalone = (
    <WebIconsBackwardWrapper
      className="web-icons-backward-2"
      webIconsBackward="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--default--14.svg"
    />
  ),
  enhancedStandaloneTextClassName,
  text = "Link Label",
  webIconsForward = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--11.svg",
  enhancedStandaloneWrapper = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--small--7.svg",
}) => {
  return (
    <div className={`enhanced-standalone-links ${className}`}>
      {((fontSize === "sixteen-pt" && iconPosition === "left" && !inverse) ||
        (fontSize === "sixteen-pt" && iconPosition === "left" && inverse && state === "default") ||
        (fontSize === "sixteen-pt" && iconPosition === "left" && inverse && state === "disabled")) && (
        <EnhancedStandalone
          className="enhanced-standalone-3"
          override={enhancedStandalone}
          text={enhancedStandaloneText}
          textClassName={enhancedStandaloneTextClassName}
        />
      )}

      {((fontSize === "fourteen-pt" && iconPosition === "left") ||
        (fontSize === "sixteen-pt" && iconPosition === "right" && !inverse) ||
        (fontSize === "sixteen-pt" && iconPosition === "right" && inverse && state === "default") ||
        (fontSize === "sixteen-pt" && iconPosition === "right" && inverse && state === "disabled") ||
        (fontSize === "sixteen-pt" && inverse && state === "hover") ||
        fontSize === "twenty-pt") && (
        <div className={`enhanced-standalone-4 ${fontSize}`}>
          {fontSize === "fourteen-pt" && (
            <WebIconsBackward
              className="web-icons-backward-2"
              webIconsBackward={
                state === "default" && !inverse
                  ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--small--11.svg"
                  : !inverse && state === "hover"
                  ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--small--6.svg"
                  : state === "disabled" && !inverse
                  ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--small--17.svg"
                  : state === "disabled" && inverse
                  ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--small--3.svg"
                  : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--small--7.svg"
              }
            />
          )}

          <div className={`label-21 font-size-${fontSize} ${iconPosition}`}>
            {(fontSize === "fourteen-pt" || iconPosition === "right") && (
              <div
                className={`text-16 state-42-${state} icon-position-${iconPosition} font-size-0-${fontSize} inverse-${inverse}`}
              >
                {text}
              </div>
            )}

            {iconPosition === "left" && ["sixteen-pt", "twenty-pt"].includes(fontSize) && (
              <WebIconsBackwardWrapper
                className="web-icons-backward-2"
                webIconsBackward={
                  state === "default" && !inverse
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--default--14.svg"
                    : !inverse && state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--default--10.svg"
                    : state === "disabled" && !inverse
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--default--6.svg"
                    : state === "disabled" && inverse
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--default--4.svg"
                    : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--default--12.svg"
                }
              />
            )}
          </div>
          {(fontSize === "twenty-pt" || (fontSize === "sixteen-pt" && iconPosition === "left")) && (
            <div className={`label-22 ${iconPosition}`}>
              {iconPosition === "left" && (
                <div className={`text-17 font-size-1-${fontSize} state-43-${state} inverse-0-${inverse}`}>{text}</div>
              )}

              {iconPosition === "right" && (
                <img
                  className="web-icons-forward-2"
                  alt="Web icons forward"
                  src={
                    state === "default" && !inverse
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--11.svg"
                      : !inverse && state === "hover"
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--7.svg"
                      : state === "disabled" && !inverse
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--3.svg"
                      : state === "disabled" && inverse
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--1.svg"
                      : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--9.svg"
                  }
                />
              )}
            </div>
          )}

          {iconPosition === "right" && fontSize === "sixteen-pt" && (
            <img
              className="web-icons-forward-2"
              alt="Web icons forward"
              src={
                state === "default" && !inverse
                  ? webIconsForward
                  : !inverse && state === "hover"
                  ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--7.svg"
                  : state === "disabled" && !inverse
                  ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--3.svg"
                  : state === "disabled" && inverse
                  ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--1.svg"
                  : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--default--9.svg"
              }
            />
          )}
        </div>
      )}

      {iconPosition === "right" && fontSize === "fourteen-pt" && (
        <EnhancedStandaloneWrapper
          className="enhanced-standalone-3"
          text="Link Label"
          textClassName={`${state === "default" && inverse && "class-59"} ${
            !inverse && state === "hover" && "class-60"
          } ${state === "hover" && inverse && "class-61"} ${state === "disabled" && !inverse && "class-62"} ${
            state === "disabled" && inverse && "class-63"
          }`}
          webIconsForwardWebIconsForward={enhancedStandaloneWrapper}
        />
      )}
    </div>
  );
};

EnhancedStandaloneLinks.propTypes = {
  iconPosition: PropTypes.oneOf(["right", "left"]),
  state: PropTypes.oneOf(["disabled", "hover", "default"]),
  fontSize: PropTypes.oneOf(["twenty-pt", "sixteen-pt", "fourteen-pt"]),
  inverse: PropTypes.bool,
  enhancedStandaloneText: PropTypes.string,
  text: PropTypes.string,
  webIconsForward: PropTypes.string,
  enhancedStandaloneWrapper: PropTypes.string,
};
