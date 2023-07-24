/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AtomsCheckbox } from "../AtomsCheckbox";
import { AtomsCheckboxWrapper } from "../AtomsCheckboxWrapper";
import { Checkbox } from "../Checkbox";
import "./style.css";

export const SelectorsCheckbox = ({
  state,
  size,
  label,
  className,
  checkboxCheckboxClassName,
  checkboxCopyClassName,
  checkboxDescriptionClassName,
  checkboxText = "Checkbox with text that can go into multiple lines as per the content.",
  checkboxSelectorClassName,
}) => {
  return (
    <div className={`selectors-checkbox state-32-${state} ${label} size-33-${size} ${className}`}>
      {((label === "off" && size === "thirty-two-px" && state === "default") ||
        (label === "off" && size === "thirty-two-px" && state === "selected") ||
        (label === "off" && state === "default-focus") ||
        (label === "off" && state === "disabled-indeterminate") ||
        (label === "off" && state === "disabled-selected") ||
        (label === "off" && state === "disabled") ||
        (label === "off" && state === "error-focus") ||
        (label === "off" && state === "error") ||
        (label === "off" && state === "indeterminate-focus") ||
        (label === "off" && state === "indeterminate") ||
        (label === "off" && state === "selected-focus") ||
        label === "on") && (
        <div className="structure-don-t-copy-5">
          <div className="atoms-checkbox-2">
            {size === "thirty-two-px" && ["default", "selected"].includes(state) && (
              <img
                className="atoms-checkbox-3"
                alt="Atoms checkbox"
                src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/-atoms-checkbox-selection-icon-default-13.svg"
              />
            )}

            {((size === "thirty-two-px" && state === "indeterminate") ||
              state === "default-focus" ||
              state === "disabled-indeterminate" ||
              state === "disabled-selected" ||
              state === "disabled" ||
              state === "error-focus" ||
              state === "error" ||
              state === "indeterminate-focus" ||
              state === "selected-focus") && (
              <div className="overlap_group">
                {(state === "default-focus" ||
                  state === "disabled-indeterminate" ||
                  state === "disabled-selected" ||
                  state === "error-focus" ||
                  state === "error" ||
                  state === "indeterminate-focus" ||
                  state === "selected-focus") && (
                  <div className="overlap-group-wrapper">
                    <div className="overlap_group">
                      {["default-focus", "error-focus", "indeterminate-focus", "selected-focus"].includes(state) && (
                        <div className="field-14" />
                      )}

                      {["default-focus", "error-focus", "indeterminate-focus", "selected-focus"].includes(state) && (
                        <div className="field-15" />
                      )}

                      {["indeterminate-focus", "selected-focus"].includes(state) && <div className="field-16" />}
                    </div>
                  </div>
                )}

                {((size === "thirty-two-px" && state === "default-focus") ||
                  (size === "thirty-two-px" && state === "disabled-selected") ||
                  (size === "thirty-two-px" && state === "error-focus") ||
                  (size === "thirty-two-px" && state === "error") ||
                  (size === "thirty-two-px" && state === "selected-focus")) && (
                  <img
                    className="atoms-checkbox-4"
                    alt="Atoms checkbox"
                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/-atoms-checkbox-selection-icon-default-13.svg"
                  />
                )}

                {((size === "twenty-four-px" && state === "default-focus") ||
                  (size === "twenty-four-px" && state === "disabled-selected") ||
                  (size === "twenty-four-px" && state === "error-focus") ||
                  (size === "twenty-four-px" && state === "error") ||
                  (size === "twenty-four-px" && state === "selected-focus")) && <AtomsCheckboxWrapper />}

                {["disabled", "indeterminate"].includes(state) && <div className="selected-5" />}

                {size === "thirty-two-px" && ["disabled-indeterminate", "indeterminate-focus"].includes(state) && (
                  <div className="atoms-checkbox-4">
                    <div className="selected-3" />
                  </div>
                )}

                {size === "twenty-four-px" && ["disabled-indeterminate", "indeterminate-focus"].includes(state) && (
                  <AtomsCheckbox className="atoms-checkbox-selection-icon-indeterminate-small" />
                )}
              </div>
            )}

            {state === "indeterminate" && size === "twenty-four-px" && (
              <AtomsCheckbox className="atoms-checkbox-instance" />
            )}
          </div>
          <div className="copy-2">
            {label === "off" && (
              <p className="description-i">Checkbox with text that can go into multiple lines as per the content.</p>
            )}

            {label === "on" && (
              <>
                <div className="label-19">Label</div>
                <p className="description-2">Checkbox with text that can go into multiple lines as per the content.</p>
              </>
            )}
          </div>
        </div>
      )}

      {label === "off" && size === "twenty-four-px" && ["default", "selected"].includes(state) && (
        <Checkbox
          className={checkboxCheckboxClassName}
          copyClassName={checkboxCopyClassName}
          descriptionClassName={checkboxDescriptionClassName}
          selectorClassName={checkboxSelectorClassName}
          text={checkboxText}
        />
      )}
    </div>
  );
};

SelectorsCheckbox.propTypes = {
  state: PropTypes.oneOf([
    "disabled-selected",
    "indeterminate",
    "default-focus",
    "indeterminate-focus",
    "default",
    "selected",
    "selected-focus",
    "error-focus",
    "disabled-indeterminate",
    "error",
    "disabled",
  ]),
  size: PropTypes.oneOf(["thirty-two-px", "twenty-four-px"]),
  label: PropTypes.oneOf(["off", "on"]),
  checkboxText: PropTypes.string,
};
