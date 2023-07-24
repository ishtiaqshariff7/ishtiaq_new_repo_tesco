/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DropdownDefault } from "../DropdownDefault";
import "./style.css";

export const SortByElement = ({
  className,
  dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--124.svg",
}) => {
  return (
    <div className={`sort-by-element ${className}`}>
      <DropdownDefault
        atomsDropdowIconsAtomsDropdowIconsClassName="dropdown-default-8"
        atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand={
          dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand
        }
        className="design-component-instance-node"
        complete={false}
        hintSelectionClassName="dropdown-default-7"
        leftLabel
        size="forty-px"
        state="default"
        text="Show"
        text1="48"
      />
      <div className="text-9">results per page</div>
    </div>
  );
};

SortByElement.propTypes = {
  dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand: PropTypes.string,
};
