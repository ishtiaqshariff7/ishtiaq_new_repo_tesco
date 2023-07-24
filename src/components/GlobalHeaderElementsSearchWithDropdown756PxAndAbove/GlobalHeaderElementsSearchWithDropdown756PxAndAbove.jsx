/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { GlobalHeaderElementsBasket } from "../GlobalHeaderElementsBasket";
import { SearchWithDropdown } from "../SearchWithDropdown";
import { WebIconsBasket } from "../WebIconsBasket";
import { WebIconsSearch } from "../WebIconsSearch";
import "./style.css";

export const GlobalHeaderElementsSearchWithDropdown756PxAndAbove = ({
  basket = true,
  className,
  searchWithDropdownSearchInputLeadingIconWebIconsSearchUnion = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-112.svg",
  searchWithDropdownDropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--10.svg",
  searchWithDropdownSearchInput = (
    <WebIconsSearch union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-111.svg" />
  ),
  globalHeaderElementsBasketButtonIconButtonButtonPxNoText = (
    <WebIconsBasket union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-28.svg" />
  ),
}) => {
  return (
    <div className={`global-header-elements-search-with-dropdown-756px-and-above ${className}`}>
      <SearchWithDropdown
        className="search-with-dropdown-instance"
        device="desktop"
        dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand={
          searchWithDropdownDropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand
        }
        dropdownDefaultHintText={false}
        dropdownDefaultLabel={false}
        dropdownDefaultText="Groceries"
        searchInput={searchWithDropdownSearchInput}
        searchInputDdsFormStyleDdsFormStyleClassName="search-with-dropdown-2"
        searchInputLabel={false}
        searchInputLeadingIconWebIconsSearchUnion={searchWithDropdownSearchInputLeadingIconWebIconsSearchUnion}
        searchInputPreferredHint={false}
        searchInputSearchButtonUsage="global-1"
        searchInputText="Search"
      />
      {basket && <div className="divider-3" />}

      {basket && (
        <GlobalHeaderElementsBasket
          buttonIconButtonButtonPxNoText={globalHeaderElementsBasketButtonIconButtonButtonPxNoText}
          className="basket"
          state="items-added"
          total="£94.60"
        />
      )}
    </div>
  );
};

GlobalHeaderElementsSearchWithDropdown756PxAndAbove.propTypes = {
  basket: PropTypes.bool,
  searchWithDropdownSearchInputLeadingIconWebIconsSearchUnion: PropTypes.string,
  searchWithDropdownDropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand: PropTypes.string,
};
