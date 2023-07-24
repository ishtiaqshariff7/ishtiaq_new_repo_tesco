/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AtomsDropdowIcons } from "../AtomsDropdowIcons";
import "./style.css";

export const DropdownDefault = ({
  hintText = true,
  optionalText = true,
  label = true,
  complete,
  leftLabel,
  state,
  size,
  className,
  text = "Label",
  hintSelectionClassName,
  text1 = "Select [label]",
  atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--123.svg",
  atomsDropdowIconsAtomsDropdowIconsClassName,
  hintSelectionClassNameOverride,
  atomsDropdowIconsWebIconsExpandWrapperImg = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--123.svg",
  atomsDropdowIconsAtomsDropdowIconsClassNameOverride,
  text2 = "Hint text goes here. Delete as necessary",
}) => {
  return (
    <div className={`dropdown-default ${className}`}>
      {leftLabel && (
        <div className={`field-2 size-6-${size}`}>
          <div className="label-container">
            <div className={`label-6 state-10-${state}`}>{text}</div>
          </div>
          <div className="field-container-2">
            {["default", "disabled", "focus"].includes(state) && (
              <div className={`field-3 state-4-${state} size-9-${size}`}>
                {state === "default" && (
                  <>
                    <div className={`hint-selection ${hintSelectionClassName}`}>
                      {!complete && <>{text1}</>}

                      {complete && <>Selected [options]</>}
                    </div>
                    <AtomsDropdowIcons
                      className={atomsDropdowIconsAtomsDropdowIconsClassName}
                      webIconsExpandWrapperWebIconsExpand={atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand}
                    />
                  </>
                )}

                {["disabled", "focus"].includes(state) && (
                  <div className="overlap">
                    <div className="DDS-form-style-focus">
                      <div className="overlap_group">
                        {state === "focus" && (
                          <>
                            <div className="field-4" />
                            <div className="field-5" />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="hint-selection-2">
                      {!complete && <>{text1}</>}

                      {complete && <>Selected [options]</>}
                    </div>
                    <AtomsDropdowIcons
                      className={`${size === "forty-px" ? "class-45" : "class-46"}`}
                      webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--123.svg"
                    />
                  </div>
                )}
              </div>
            )}

            {["error-focus", "error"].includes(state) && (
              <>
                <div className="overlap-wrapper">
                  <div className="overlap-2">
                    <div className="DDS-form-style-error">
                      <div className={`overlap_group state-13-${state} size-20-${size}`}>
                        {state === "error-focus" && (
                          <>
                            <div className="field-6" />
                            <div className="field-7" />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="hint-selection-3">
                      {!complete && <>{text1}</>}

                      {complete && <>Selected [options]</>}
                    </div>
                    <AtomsDropdowIcons
                      className={`${size === "forty-px" ? "class-45" : "class-46"}`}
                      webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--123.svg"
                    />
                  </div>
                </div>
                <p className="error-text">Error text. Delete as necessary</p>
              </>
            )}
          </div>
        </div>
      )}

      {((!complete && !leftLabel && state === "disabled") ||
        (!leftLabel && state === "default") ||
        (!leftLabel && state === "error-focus") ||
        (!leftLabel && state === "error") ||
        (!leftLabel && state === "focus")) && (
        <>
          <>
            {label && (
              <div className={`label-7 state-14-${state} complete-${complete} size-24-${size}`}>
                {label && <div className="label-8">Label. Delete as necessary</div>}

                {optionalText && <div className="optional-mark">(optional)</div>}
              </div>
            )}
          </>
        </>
      )}

      {complete && state === "disabled" && !leftLabel && (
        <div className="label-9">
          {label && <div className="label-10">Label. Delete as necessary</div>}

          {optionalText && <div className="optional-mark-2">(optional)</div>}
        </div>
      )}

      {!leftLabel && (
        <>
          <>{hintText && <p className="hint">{text2}</p>}</>
          <div className="field-wrapper">
            <div className={`field-8 state-7-${state} size-25-${size}`}>
              {["disabled", "error-focus", "error", "focus"].includes(state) && (
                <div className="overlap-group-3">
                  <div className="DDS-form-style-2">
                    <div className="field-17">
                      {["error-focus", "focus"].includes(state) && (
                        <>
                          <div className="field-9" />
                          <div className="field-10" />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="hint-selection-4">
                    {complete && <>Selected [options]</>}

                    {!complete && <>{text1}</>}
                  </div>
                  <AtomsDropdowIcons
                    className={`${size === "thirty-two-px" ? "class-47" : "class-48"}`}
                    webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--123.svg"
                  />
                </div>
              )}

              {state === "default" && (
                <>
                  <div className={`hint-selection-5 ${hintSelectionClassNameOverride}`}>
                    {!complete && <>{text1}</>}

                    {complete && <>Selected [options]</>}
                  </div>
                  <AtomsDropdowIcons
                    className={atomsDropdowIconsAtomsDropdowIconsClassNameOverride}
                    webIconsExpandWrapperWebIconsExpand={atomsDropdowIconsWebIconsExpandWrapperImg}
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}

      {!leftLabel && ["error-focus", "error"].includes(state) && (
        <div className="error-container">
          <p className="p">Error text. Delete as necessary</p>
        </div>
      )}
    </div>
  );
};

DropdownDefault.propTypes = {
  hintText: PropTypes.bool,
  optionalText: PropTypes.bool,
  label: PropTypes.bool,
  complete: PropTypes.bool,
  leftLabel: PropTypes.bool,
  state: PropTypes.oneOf(["default", "focus", "error-focus", "error", "disabled"]),
  size: PropTypes.oneOf(["thirty-two-px", "forty-px"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand: PropTypes.string,
  atomsDropdowIconsWebIconsExpandWrapperImg: PropTypes.string,
  text2: PropTypes.string,
};
