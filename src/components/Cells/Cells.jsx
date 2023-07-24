/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonIconButton } from "../ButtonIconButton";
import { DdsFormStyle } from "../DdsFormStyle";
import { DropdownDefault } from "../DropdownDefault";
import { EnhancedStandaloneLinks } from "../EnhancedStandaloneLinks";
import { StatusIndicator } from "../StatusIndicator";
import { WebIconsExpand } from "../WebIconsExpand";
import "./style.css";

export const Cells = ({
  borderBottom = true,
  borderRight = true,
  text = "Table cell",
  linkText = "Link label",
  borderLeft,
  borderTop,
  showText = true,
  size,
  type,
  backgroundColour,
  className,
  borderRightClassName,
  borderBottomClassName,
  inputsTextInputClassName,
  text1 = "Label",
}) => {
  return (
    <div className={`cells type-4-${type} ${backgroundColour} size-2-${size} ${className}`}>
      {type === "dropdown" && (
        <DropdownDefault
          atomsDropdowIconsAtomsDropdowIconsClassNameOverride="dropdown-default-6"
          atomsDropdowIconsWebIconsExpandWrapperImg="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--81.svg"
          className="dropdown-default-4"
          complete={false}
          hintSelectionClassNameOverride="dropdown-default-5"
          hintText={false}
          label={false}
          leftLabel={false}
          size="thirty-two-px"
          state="default"
          text1="Select [label]"
        />
      )}

      {(type === "form-field" ||
        type === "radio-button" ||
        type === "status" ||
        type === "text" ||
        (size === "fifty-six-px-fixed" && type === "link")) && (
        <div className={`inputs-text-input ${inputsTextInputClassName}`}>
          {["form-field", "link", "radio-button", "text"].includes(type) && (
            <div className="structure-don-t-copy-2">
              {(size === "forty-two-px-flex" || type === "form-field") && (
                <div className="field">
                  {size === "fifty-six-px-fixed" && (
                    <div className="field-container">
                      <div className="input-field">
                        <div className="overlap-group-2">
                          <div className="form-field">
                            <DdsFormStyle className="input-field" />
                          </div>
                          <div className="type-wrapper">
                            <div className="type" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {type === "text" && <>Table cell</>}
                </div>
              )}

              {(type === "link" || (size === "fifty-six-px-fixed" && type === "text")) && (
                <>
                  <>
                    {showText && (
                      <div className="table-cell">
                        {type === "text" && <>{text}</>}

                        {type === "link" && <>{linkText}</>}
                      </div>
                    )}
                  </>
                </>
              )}
            </div>
          )}

          {type === "status" && (
            <>
              <div className="label-name">{text1}</div>
              <StatusIndicator className="status-indicator-16px" state="pending" />
            </>
          )}
        </div>
      )}

      {((size === "fifty-six-px-fixed" && type === "link") ||
        type === "dropdown" ||
        type === "form-field" ||
        type === "radio-button" ||
        type === "status" ||
        type === "text") && (
        <>
          <>{borderRight && <div className={`border-right-2 ${borderRightClassName}`} />}</>
          <>{borderBottom && <div className={`border-bottom-2 ${borderBottomClassName}`} />}</>
        </>
      )}

      {type === "checkbox" && (
        <>
          <div className={`checkbox-2 ${inputsTextInputClassName}`} />
          <>{borderBottom && <div className={`border-bottom-3 ${borderBottomClassName}`} />}</>
          <>{borderRight && <div className="border-right-3" />}</>
        </>
      )}

      {type === "alert" && (
        <>
          <StatusIndicator className="status-indicator-instance" state="information" />
          <>{borderRight && <div className={`border-right-3 ${borderRightClassName}`} />}</>
          <>{borderBottom && <div className={`border-bottom-3 ${borderBottomClassName}`} />}</>
        </>
      )}

      {type === "secondary-button" && (
        <>
          <ButtonIconButton
            buttonNoText={
              <WebIconsExpand
                className="web-icons-expand-24px-small"
                webIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--small--9.svg"
              />
            }
            className="instance-node-4"
            onDark={false}
            size="twenty-four-px"
            state="active"
            style="secondary"
          />
          <>{borderRight && <div className={`border-right-3 ${borderRightClassName}`} />}</>
          <>{borderBottom && <div className={`border-bottom-3 ${borderBottomClassName}`} />}</>
        </>
      )}

      {type === "link" && size === "forty-two-px-flex" && (
        <>
          <EnhancedStandaloneLinks
            className="instance-node-4"
            enhancedStandaloneWrapper="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-forward-24px--small--19.svg"
            fontSize="fourteen-pt"
            iconPosition="right"
            inverse={false}
            state="default"
          />
          <>{borderRight && <div className={`border-right-4 ${borderRightClassName}`} />}</>
          <>{borderBottom && <div className={`border-bottom-4 ${borderBottomClassName}`} />}</>
        </>
      )}
    </div>
  );
};

Cells.propTypes = {
  borderBottom: PropTypes.bool,
  borderRight: PropTypes.bool,
  text: PropTypes.string,
  linkText: PropTypes.string,
  borderLeft: PropTypes.bool,
  borderTop: PropTypes.bool,
  showText: PropTypes.bool,
  size: PropTypes.oneOf(["forty-two-px-flex", "fifty-six-px-fixed"]),
  type: PropTypes.oneOf([
    "form-field",
    "checkbox",
    "status",
    "dropdown",
    "link",
    "radio-button",
    "secondary-button",
    "alert",
    "text",
  ]),
  backgroundColour: PropTypes.oneOf(["grey", "white"]),
  text1: PropTypes.string,
};
