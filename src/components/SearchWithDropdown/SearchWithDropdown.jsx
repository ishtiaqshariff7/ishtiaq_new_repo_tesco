/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DropdownDefault } from "../DropdownDefault";
import { SearchInput } from "../SearchInput";
import { WebIconsSearch } from "../WebIconsSearch";
import "./style.css";

export const SearchWithDropdown = ({
  device,
  className,
  dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--9.svg",
  dropdownDefaultHintText,
  dropdownDefaultText = "Select [label]",
  dropdownDefaultLabel,
  searchInputLeadingIconWebIconsSearchUnion = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-24.svg",
  searchInputDdsFormStyleDdsFormStyleClassName,
  searchInputPreferredHint,
  searchInputText = "Hint text (optional)",
  searchInput = (
    <WebIconsSearch union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-23.svg" />
  ),
  searchInputLabel,
  searchInputSearchButtonUsage,
}) => {
  return (
    <div className={`search-with-dropdown device-4-${device} ${className}`}>
      <DropdownDefault
        atomsDropdowIconsAtomsDropdowIconsClassNameOverride={`${device === "mobile" ? "class-56" : "class-57"}`}
        atomsDropdowIconsWebIconsExpandWrapperImg={dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand}
        className={`${device === "mobile" ? "class-53" : "class-54"}`}
        complete={false}
        hintSelectionClassNameOverride={`${device === "desktop" && "class-55"}`}
        hintText={dropdownDefaultHintText}
        label={dropdownDefaultLabel}
        leftLabel={false}
        optionalText={false}
        size="forty-px"
        state="default"
        text1={dropdownDefaultText}
        text2="Hint text goes here."
      />
      <SearchInput
        DDSFormStyleDdsFormStyleClassName={searchInputDdsFormStyleDdsFormStyleClassName}
        className={`${device === "mobile" ? "class-53" : "class-58"}`}
        complete={false}
        device={device === "mobile" ? "mobile" : "desktop"}
        label={searchInputLabel}
        leadingIconWebIconsSearchUnion={searchInputLeadingIconWebIconsSearchUnion}
        override={searchInput}
        preferredHint={searchInputPreferredHint}
        searchButtonButtonIconButtonState={device === "desktop" ? "active" : undefined}
        searchButtonUsage={searchInputSearchButtonUsage}
        state="default"
        text={searchInputText}
      />
    </div>
  );
};

SearchWithDropdown.propTypes = {
  device: PropTypes.oneOf(["desktop", "mobile"]),
  dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand: PropTypes.string,
  dropdownDefaultHintText: PropTypes.bool,
  dropdownDefaultText: PropTypes.string,
  dropdownDefaultLabel: PropTypes.bool,
  searchInputLeadingIconWebIconsSearchUnion: PropTypes.string,
  searchInputPreferredHint: PropTypes.bool,
  searchInputText: PropTypes.string,
  searchInputLabel: PropTypes.bool,
  searchInputSearchButtonUsage: PropTypes.string,
};
