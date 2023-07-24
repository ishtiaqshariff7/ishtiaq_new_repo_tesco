/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Chips } from "../Chips";
import { DropdownDefault } from "../DropdownDefault";
import { ElementWebIconsClose } from "../ElementWebIconsClose";
import { EnhancedStandaloneLinks } from "../EnhancedStandaloneLinks";
import { SelectorsCheckbox } from "../SelectorsCheckbox";
import { TabMenuFilters } from "../TabMenuFilters";
import { WebIconsReset } from "../WebIconsReset";
import "./style.css";

export const HorizontalFilter = ({
  title = true,
  checkbox4,
  moreLink = true,
  resultsText = true,
  resetLink = true,
  width,
  state,
  moreLabel,
  chips,
  className,
  hasFilterContainer = true,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperImg = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--73.svg",
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand1 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg",
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand2,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand3,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand4 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg",
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand5,
  hasCheckboxGroup = true
}) => {
  return (
    <div
      className={`horizontal-filter ${width} chips-${chips} state-4-${state} more-label-${moreLabel} ${className}`}
    >
      {title && <div className="title">Title</div>}

      {!chips &&
        [
          "one-thousand-and-eight-px-and-767px",
          "one-thousand-two-hundred-and-sixty-px-and-above"
        ].includes(width) && (
          <>
            <>
              {hasFilterContainer && (
                <div className="filter-container">
                  {resultsText && (
                    <div className="item-count-2">
                      <div className="text-wrapper-2">Showing</div>
                      <div className="element">1-24</div>
                      <div className="text-wrapper-2">of</div>
                      <div className="text-wrapper-3">50</div>
                      <div className="text-wrapper-2">results</div>
                    </div>
                  )}

                  <div className="container-4">
                    {(state === "active-selected" ||
                      (state === "default" &&
                        width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above")) && (
                      <div className="text-wrapper-3">Filter by:</div>
                    )}

                    <div className="filter-group">
                      {(state === "active-selected" ||
                        (state === "default" &&
                          width ===
                            "one-thousand-two-hundred-and-sixty-px-and-above")) && (
                        <>
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-instance"
                            checkboxCopyClassName="selectors-checkbox-2"
                            checkboxDescriptionClassName="selectors-checkbox-3"
                            checkboxSelectorClassName={`${
                              ((moreLabel &&
                                width ===
                                  "one-thousand-two-hundred-and-sixty-px-and-above") ||
                                (!moreLabel && state === "active-selected")) &&
                              "selectors-checkbox-4"
                            }`}
                            checkboxText="Label"
                            className="selectors-checkbox-instance"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-instance"
                            checkboxCopyClassName="selectors-checkbox-2"
                            checkboxDescriptionClassName="selectors-checkbox-3"
                            checkboxSelectorClassName={`${
                              ((moreLabel &&
                                width ===
                                  "one-thousand-two-hundred-and-sixty-px-and-above") ||
                                (!moreLabel && state === "active-selected")) &&
                              "selectors-checkbox-4"
                            }`}
                            checkboxText="Label"
                            className="selectors-checkbox-instance"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-instance"
                            checkboxCopyClassName="selectors-checkbox-2"
                            checkboxDescriptionClassName="selectors-checkbox-3"
                            checkboxSelectorClassName={`${
                              ((moreLabel &&
                                width ===
                                  "one-thousand-two-hundred-and-sixty-px-and-above") ||
                                (!moreLabel && state === "active-selected")) &&
                              "selectors-checkbox-4"
                            }`}
                            checkboxText="Label"
                            className="selectors-checkbox-instance"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                        </>
                      )}

                      {state === "default" &&
                        width === "one-thousand-and-eight-px-and-767px" && (
                          <>
                            <div className="text-wrapper-3">Filter by:</div>
                            <div className="filter-group-2">
                              <SelectorsCheckbox
                                checkboxCheckboxClassName="selectors-checkbox-instance"
                                checkboxCopyClassName="selectors-checkbox-2"
                                checkboxDescriptionClassName="selectors-checkbox-3"
                                checkboxText="Label"
                                className="selectors-checkbox-instance"
                                label="off"
                                size="twenty-four-px"
                                state="default"
                              />
                              <SelectorsCheckbox
                                checkboxCheckboxClassName="selectors-checkbox-instance"
                                checkboxCopyClassName="selectors-checkbox-2"
                                checkboxDescriptionClassName="selectors-checkbox-3"
                                checkboxText="Label"
                                className="selectors-checkbox-instance"
                                label="off"
                                size="twenty-four-px"
                                state="default"
                              />
                              <SelectorsCheckbox
                                checkboxCheckboxClassName="selectors-checkbox-instance"
                                checkboxCopyClassName="selectors-checkbox-2"
                                checkboxDescriptionClassName="selectors-checkbox-3"
                                checkboxText="Label"
                                className="selectors-checkbox-instance"
                                label="off"
                                size="twenty-four-px"
                                state="default"
                              />
                            </div>
                          </>
                        )}
                    </div>
                  </div>
                </div>
              )}
            </>
          </>
        )}

      {!moreLabel && width === "seven-hundred-and-fifty-six-px-and-504px" && (
        <>
          <>
            {resultsText && (
              <div className="item-count-3">
                <div className="text-wrapper-2">Showing</div>
                <div className="element">1-24</div>
                <div className="text-wrapper-2">of</div>
                <div className="text-wrapper-3">50</div>
                <div className="text-wrapper-2">results</div>
              </div>
            )}
          </>
        </>
      )}

      {!chips && width === "seven-hundred-and-fifty-six-px-and-504px" && (
        <div className="filter-container-2">
          {moreLabel && (
            <>
              <>
                {resultsText && (
                  <div className="item-count-3">
                    <div className="text-wrapper-2">Showing</div>
                    <div className="element">1-24</div>
                    <div className="text-wrapper-2">of</div>
                    <div className="text-wrapper-3">50</div>
                    <div className="text-wrapper-2">results</div>
                  </div>
                )}
              </>
            </>
          )}

          <div className="filter-container-3">
            <div className="text-wrapper-3">Filter by:</div>
            <div className="filter-group-2">
              <SelectorsCheckbox
                checkboxCheckboxClassName="selectors-checkbox-instance"
                checkboxCopyClassName="selectors-checkbox-2"
                checkboxDescriptionClassName="selectors-checkbox-3"
                checkboxSelectorClassName="selectors-checkbox-4"
                checkboxText="Label"
                className="selectors-checkbox-instance"
                label="off"
                size="twenty-four-px"
                state="default"
              />
              <SelectorsCheckbox
                checkboxCheckboxClassName="selectors-checkbox-instance"
                checkboxCopyClassName="selectors-checkbox-2"
                checkboxDescriptionClassName="selectors-checkbox-3"
                checkboxSelectorClassName="selectors-checkbox-4"
                checkboxText="Label"
                className="selectors-checkbox-instance"
                label="off"
                size="twenty-four-px"
                state="default"
              />
              <SelectorsCheckbox
                checkboxCheckboxClassName="selectors-checkbox-instance"
                checkboxCopyClassName="selectors-checkbox-2"
                checkboxDescriptionClassName="selectors-checkbox-3"
                checkboxSelectorClassName="selectors-checkbox-4"
                checkboxText="Label"
                className="selectors-checkbox-instance"
                label="off"
                size="twenty-four-px"
                state="default"
              />
            </div>
          </div>
        </div>
      )}

      {chips &&
        [
          "one-thousand-and-eight-px-and-767px",
          "one-thousand-two-hundred-and-sixty-px-and-above"
        ].includes(width) && (
          <div className="filter-container">
            {resultsText && (
              <div className="item-count-2">
                <div className="text-wrapper-2">Showing</div>
                <div className="element">1-24</div>
                <div className="text-wrapper-2">of</div>
                <div className="text-wrapper-3">50</div>
                <div className="text-wrapper-2">results</div>
              </div>
            )}

            <div className="container-4">
              <div className="text-wrapper-3">Filter by:</div>
              <div className="filter-group-2">
                <SelectorsCheckbox
                  checkboxCheckboxClassName="selectors-checkbox-instance"
                  checkboxCopyClassName="selectors-checkbox-2"
                  checkboxDescriptionClassName="selectors-checkbox-3"
                  checkboxSelectorClassName="selectors-checkbox-4"
                  checkboxText="Label"
                  className="selectors-checkbox-instance"
                  label="off"
                  size="twenty-four-px"
                  state="default"
                />
                <SelectorsCheckbox
                  checkboxCheckboxClassName="selectors-checkbox-instance"
                  checkboxCopyClassName="selectors-checkbox-2"
                  checkboxDescriptionClassName="selectors-checkbox-3"
                  checkboxSelectorClassName="selectors-checkbox-4"
                  checkboxText="Label"
                  className="selectors-checkbox-instance"
                  label="off"
                  size="twenty-four-px"
                  state="default"
                />
                <SelectorsCheckbox
                  checkboxCheckboxClassName="selectors-checkbox-instance"
                  checkboxCopyClassName="selectors-checkbox-2"
                  checkboxDescriptionClassName="selectors-checkbox-3"
                  checkboxSelectorClassName="selectors-checkbox-4"
                  checkboxText="Label"
                  className="selectors-checkbox-instance"
                  label="off"
                  size="twenty-four-px"
                  state="default"
                />
              </div>
            </div>
          </div>
        )}

      {((chips && width === "one-thousand-and-eight-px-and-767px") ||
        (chips &&
          width === "one-thousand-two-hundred-and-sixty-px-and-above") ||
        (state === "default" &&
          width === "one-thousand-and-eight-px-and-767px") ||
        (state === "default" &&
          width === "one-thousand-two-hundred-and-sixty-px-and-above")) && (
        <div className="tabs-2">
          {state === "default" && (
            <>
              <TabMenuFilters
                className="tab-menu-filters-instance"
                state="default"
                tab4={false}
                tab5={false}
                tab6={false}
                tab7={false}
                tabMenuItemsWebIconsExpandWrapperImg={
                  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand4
                }
                tabMenuItemsWebIconsExpandWrapperWebIconsExpand={
                  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperImg
                }
                tabMenuItemsWebIconsExpandWrapperWebIconsExpand1={
                  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand1
                }
                tabMenuItemsWebIconsExpandWrapperWebIconsExpand2={
                  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand
                }
                tabMenuItemsWebIconsExpandWrapperWebIconsExpand3={
                  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand3
                }
                tabMenuItemsWebIconsExpandWrapperWebIconsExpand4={
                  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand2
                }
                tabMenuItemsWebIconsExpandWrapperWebIconsExpand5={
                  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand5
                }
              />
              <>
                {hasCheckboxGroup && (
                  <DropdownDefault
                    atomsDropdowIconsAtomsDropdowIconsClassName="dropdown-default-dropdown"
                    atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand={
                      width ===
                      "one-thousand-two-hundred-and-sixty-px-and-above"
                        ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--70.svg"
                        : width === "one-thousand-and-eight-px-and-767px"
                        ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--66.svg"
                        : undefined
                    }
                    className={`${
                      width ===
                        "one-thousand-two-hundred-and-sixty-px-and-above" &&
                      "class"
                    } ${
                      width === "one-thousand-and-eight-px-and-767px" &&
                      "class-2"
                    }`}
                    complete={false}
                    hintSelectionClassName="dropdown-default-instance"
                    leftLabel
                    size="forty-px"
                    state="default"
                    text="Sort by"
                    text1="Relevance"
                  />
                )}
              </>
            </>
          )}

          {chips && (
            <>
              <TabMenuFilters
                className="tab-menu-filters-instance"
                state="default"
                tab4={false}
                tab5={false}
                tab6={false}
                tab7={false}
                tabMenuItemsWebIconsExpandWrapperImg="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
                tabMenuItemsWebIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--73.svg"
                tabMenuItemsWebIconsExpandWrapperWebIconsExpand1="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
              />
              <DropdownDefault
                atomsDropdowIconsAtomsDropdowIconsClassName="dropdown-default-dropdown"
                atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand={
                  width === "one-thousand-two-hundred-and-sixty-px-and-above"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--70.svg"
                    : width === "one-thousand-and-eight-px-and-767px"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--66.svg"
                    : undefined
                }
                className={`${
                  width === "one-thousand-two-hundred-and-sixty-px-and-above" &&
                  "class"
                } ${
                  width === "one-thousand-and-eight-px-and-767px" && "class-2"
                }`}
                complete={false}
                hintSelectionClassName="dropdown-default-instance"
                leftLabel
                size="forty-px"
                state="default"
                text="Sort by"
                text1="Relevance"
              />
            </>
          )}
        </div>
      )}

      {chips &&
        [
          "one-thousand-and-eight-px-and-767px",
          "one-thousand-two-hundred-and-sixty-px-and-above"
        ].includes(width) && (
          <>
            <>
              {false && (
                <div className="chips-wrapper">
                  <div className="chips-2">
                    <Chips
                      buttonIconButtonButtonNoText={
                        <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-250.svg" />
                      }
                      className="instance-node-3"
                      state="selected"
                      text="Chip label"
                    />
                    <Chips
                      buttonIconButtonButtonNoText={
                        <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                      }
                      className="instance-node-3"
                      state="selected"
                      text="Chip label"
                    />
                    <Chips
                      buttonIconButtonButtonNoText={
                        <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                      }
                      className="instance-node-3"
                      state="selected"
                      text="Chip label"
                    />
                    <Chips
                      buttonIconButtonButtonNoText={
                        <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                      }
                      className="instance-node-3"
                      state="selected"
                      text="Chip label"
                    />
                    {width ===
                      "one-thousand-two-hundred-and-sixty-px-and-above" && (
                      <>
                        <Chips
                          buttonIconButtonButtonNoText={
                            <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                          }
                          className="instance-node-3"
                          state="selected"
                          text="Chip label"
                        />
                        <Chips
                          buttonIconButtonButtonNoText={
                            <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                          }
                          className="instance-node-3"
                          state="selected"
                          text="Chip label"
                        />
                        <Chips
                          buttonIconButtonButtonNoText={
                            <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                          }
                          className="instance-node-3"
                          state="selected"
                          text="Chip label"
                        />
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
            <>
              {false && (
                <div className="chips-wrapper">
                  <div className="chips-2">
                    <Chips
                      buttonIconButtonButtonNoText={
                        <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-250.svg" />
                      }
                      className="instance-node-3"
                      state="selected"
                      text="Chip label"
                    />
                    <Chips
                      buttonIconButtonButtonNoText={
                        <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                      }
                      className="instance-node-3"
                      state="selected"
                      text="Chip label"
                    />
                    <Chips
                      buttonIconButtonButtonNoText={
                        <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                      }
                      className="instance-node-3"
                      state="selected"
                      text="Chip label"
                    />
                    <Chips
                      buttonIconButtonButtonNoText={
                        <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                      }
                      className="instance-node-3"
                      state="selected"
                      text="Chip label"
                    />
                    {width ===
                      "one-thousand-two-hundred-and-sixty-px-and-above" && (
                      <>
                        <Chips
                          buttonIconButtonButtonNoText={
                            <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                          }
                          className="instance-node-3"
                          state="selected"
                          text="Chip label"
                        />
                        <Chips
                          buttonIconButtonButtonNoText={
                            <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                          }
                          className="instance-node-3"
                          state="selected"
                          text="Chip label"
                        />
                        <Chips
                          buttonIconButtonButtonNoText={
                            <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                          }
                          className="instance-node-3"
                          state="selected"
                          text="Chip label"
                        />
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          </>
        )}

      {((chips && width === "one-thousand-and-eight-px-and-767px") ||
        (chips &&
          width === "one-thousand-two-hundred-and-sixty-px-and-above") ||
        (state === "default" &&
          width === "one-thousand-and-eight-px-and-767px") ||
        (state === "default" &&
          width === "one-thousand-two-hundred-and-sixty-px-and-above")) && (
        <>
          <>
            {resetLink && (
              <EnhancedStandaloneLinks
                className="instance-node-3"
                enhancedStandalone={<WebIconsReset />}
                enhancedStandaloneText="Clear filters"
                enhancedStandaloneTextClassName="enhanced-standalone-instance"
                fontSize="sixteen-pt"
                iconPosition="left"
                inverse={false}
                state="default"
              />
            )}
          </>
        </>
      )}

      {chips && width === "seven-hundred-and-fifty-six-px-and-504px" && (
        <div className="filter-container-wrapper">
          <div className="filter-container-4">
            <div className="text-wrapper-3">Filter by:</div>
            <div className="filter-group-2">
              <SelectorsCheckbox
                checkboxCheckboxClassName="selectors-checkbox-instance"
                checkboxCopyClassName="selectors-checkbox-2"
                checkboxDescriptionClassName="selectors-checkbox-3"
                checkboxSelectorClassName="selectors-checkbox-4"
                checkboxText="Label"
                className="selectors-checkbox-instance"
                label="off"
                size="twenty-four-px"
                state="default"
              />
              <SelectorsCheckbox
                checkboxCheckboxClassName="selectors-checkbox-instance"
                checkboxCopyClassName="selectors-checkbox-2"
                checkboxDescriptionClassName="selectors-checkbox-3"
                checkboxSelectorClassName="selectors-checkbox-4"
                checkboxText="Label"
                className="selectors-checkbox-instance"
                label="off"
                size="twenty-four-px"
                state="default"
              />
              <SelectorsCheckbox
                checkboxCheckboxClassName="selectors-checkbox-instance"
                checkboxCopyClassName="selectors-checkbox-2"
                checkboxDescriptionClassName="selectors-checkbox-3"
                checkboxSelectorClassName="selectors-checkbox-4"
                checkboxText="Label"
                className="selectors-checkbox-instance"
                label="off"
                size="twenty-four-px"
                state="default"
              />
            </div>
          </div>
        </div>
      )}

      {((chips && width === "seven-hundred-and-fifty-six-px-and-504px") ||
        (!chips && state === "active-selected") ||
        (state === "default" &&
          width === "seven-hundred-and-fifty-six-px-and-504px")) && (
        <div className="div-3">
          {(moreLabel || !chips) &&
            (moreLabel || state === "active-selected") &&
            (moreLabel ||
              width === "seven-hundred-and-fifty-six-px-and-504px") &&
            (!chips ||
              width === "one-thousand-two-hundred-and-sixty-px-and-above") &&
            (state === "active-selected" ||
              width === "one-thousand-two-hundred-and-sixty-px-and-above") &&
            [
              "seven-hundred-and-fifty-six-px-and-504px",
              "one-thousand-two-hundred-and-sixty-px-and-above"
            ].includes(width) && (
              <TabMenuFilters
                className={`${
                  width === "one-thousand-two-hundred-and-sixty-px-and-above" &&
                  "class-3"
                } ${
                  width === "seven-hundred-and-fifty-six-px-and-504px" &&
                  "class-4"
                }`}
                dividerColorDarkGreyClassName="tab-menu-filters-5"
                state="active-selected"
                tab4={false}
                tab5={false}
                tab6={false}
                tab7={false}
                tabMenuItemsStateActiveClassName="tab-menu-filters-2"
                tabMenuItemsStateActiveClassNameOverride="tab-menu-filters-4"
                tabMenuItemsStateHoverSelectedClassName="tab-menu-filters-3"
                tabMenuItemsWebIconsContract="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--11.svg"
                tabMenuItemsWebIconsExpandWrapperWebIconsExpand6="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
                tabMenuItemsWebIconsExpandWrapperWebIconsExpand7="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
              />
            )}

          {(width === "one-thousand-and-eight-px-and-767px" ||
            (!moreLabel &&
              width === "one-thousand-two-hundred-and-sixty-px-and-above")) && (
            <>
              <div className="container-5">
                <TabMenuFilters
                  className="tab-menu-filters-instance"
                  dividerColorDarkGreyClassName="tab-menu-filters-5"
                  state="active-selected"
                  tab4={false}
                  tab5={false}
                  tab6={false}
                  tab7={false}
                  tabMenuItemsStateActiveClassName="tab-menu-filters-2"
                  tabMenuItemsStateActiveClassNameOverride="tab-menu-filters-4"
                  tabMenuItemsStateHoverSelectedClassName="tab-menu-filters-3"
                  tabMenuItemsWebIconsContract="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--11.svg"
                  tabMenuItemsWebIconsExpandWrapperWebIconsExpand6="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
                  tabMenuItemsWebIconsExpandWrapperWebIconsExpand7="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
                />
                <DropdownDefault
                  atomsDropdowIconsAtomsDropdowIconsClassName="dropdown-default-dropdown"
                  atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand={
                    width === "one-thousand-two-hundred-and-sixty-px-and-above"
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--70.svg"
                      : width === "one-thousand-and-eight-px-and-767px"
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--66.svg"
                      : undefined
                  }
                  className={`${
                    width ===
                      "one-thousand-two-hundred-and-sixty-px-and-above" &&
                    "class"
                  } ${
                    width === "one-thousand-and-eight-px-and-767px" && "class-2"
                  }`}
                  complete={false}
                  hintSelectionClassName="dropdown-default-instance"
                  leftLabel
                  size="forty-px"
                  state="default"
                  text="Sort by"
                  text1="Relevance"
                />
              </div>
              <>
                {hasCheckboxGroup && (
                  <div className="checkbox-group">
                    <div className="div-3">
                      <div className="checkbox-row">
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            !moreLabel && "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width === "one-thousand-and-eight-px-and-767px" &&
                            "selectors-checkbox-8"
                          } ${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width === "one-thousand-and-eight-px-and-767px" &&
                            "selectors-checkbox-9"
                          } ${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        {width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" && (
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-5"
                            checkboxDescriptionClassName="selectors-checkbox-7"
                            checkboxSelectorClassName="selectors-checkbox-4"
                            checkboxText="Option 3"
                            className="selectors-checkbox-6"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                        )}
                      </div>
                      <div className="checkbox-row">
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName="selectors-checkbox-4"
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          } ${
                            width === "one-thousand-and-eight-px-and-767px" &&
                            "selectors-checkbox-8"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          } ${
                            width === "one-thousand-and-eight-px-and-767px" &&
                            "selectors-checkbox-9"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        {width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" && (
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-5"
                            checkboxDescriptionClassName="selectors-checkbox-7"
                            checkboxSelectorClassName="selectors-checkbox-4"
                            checkboxText="Option 3"
                            className="selectors-checkbox-6"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                        )}
                      </div>
                      <div className="checkbox-row">
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName="selectors-checkbox-4"
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          } ${
                            width === "one-thousand-and-eight-px-and-767px" &&
                            "selectors-checkbox-8"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          } ${
                            width === "one-thousand-and-eight-px-and-767px" &&
                            "selectors-checkbox-9"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        {width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" && (
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-5"
                            checkboxDescriptionClassName="selectors-checkbox-7"
                            checkboxSelectorClassName="selectors-checkbox-4"
                            checkboxText="Option 3"
                            className="selectors-checkbox-6"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                        )}
                      </div>
                      <div className="checkbox-row">
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName="selectors-checkbox-4"
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          } ${
                            width === "one-thousand-and-eight-px-and-767px" &&
                            "selectors-checkbox-8"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          } ${
                            width === "one-thousand-and-eight-px-and-767px" &&
                            "selectors-checkbox-9"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        {width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" && (
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-5"
                            checkboxDescriptionClassName="selectors-checkbox-7"
                            checkboxSelectorClassName="selectors-checkbox-4"
                            checkboxText="Option 3"
                            className="selectors-checkbox-6"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                        )}
                      </div>
                      {moreLabel && (
                        <>
                          <div className="checkbox-row">
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-4"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-8"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-9"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                          </div>
                          <div className="checkbox-row">
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-4"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-8"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-9"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                          </div>
                          <div className="checkbox-row">
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-4"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-8"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-9"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                          </div>
                          <div className="checkbox-row">
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-4"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-8"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                            <SelectorsCheckbox
                              checkboxCheckboxClassName="selectors-checkbox-5"
                              checkboxDescriptionClassName="selectors-checkbox-7"
                              checkboxSelectorClassName="selectors-checkbox-9"
                              checkboxText="Option 3"
                              className="selectors-checkbox-6"
                              label="off"
                              size="twenty-four-px"
                              state="default"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </>
            </>
          )}

          {width === "one-thousand-two-hundred-and-sixty-px-and-above" &&
            moreLabel && (
              <DropdownDefault
                atomsDropdowIconsAtomsDropdowIconsClassName="dropdown-default-dropdown"
                atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--35.svg"
                className="dropdown-default-dropdown-instance"
                complete={false}
                hintSelectionClassName="dropdown-default-instance"
                leftLabel
                size="forty-px"
                state="default"
                text="Sort by"
                text1="Relevance"
              />
            )}

          {(moreLabel || !chips) &&
            (moreLabel || state === "active-selected") &&
            (moreLabel ||
              width === "seven-hundred-and-fifty-six-px-and-504px") &&
            (!chips ||
              width === "one-thousand-two-hundred-and-sixty-px-and-above") &&
            (state === "active-selected" ||
              width === "one-thousand-two-hundred-and-sixty-px-and-above") &&
            [
              "seven-hundred-and-fifty-six-px-and-504px",
              "one-thousand-two-hundred-and-sixty-px-and-above"
            ].includes(width) && (
              <div className="checkbox-group">
                <div className="div-3">
                  <div className="checkbox-row">
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName="selectors-checkbox-4"
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName={`${
                        width === "seven-hundred-and-fifty-six-px-and-504px" &&
                        "selectors-checkbox-8"
                      } ${
                        width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" &&
                        "selectors-checkbox-4"
                      }`}
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName={`${
                        width === "seven-hundred-and-fifty-six-px-and-504px" &&
                        "selectors-checkbox-9"
                      } ${
                        width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" &&
                        "selectors-checkbox-4"
                      }`}
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    {width ===
                      "one-thousand-two-hundred-and-sixty-px-and-above" && (
                      <SelectorsCheckbox
                        checkboxCheckboxClassName="selectors-checkbox-5"
                        checkboxDescriptionClassName="selectors-checkbox-7"
                        checkboxSelectorClassName="selectors-checkbox-4"
                        checkboxText="Option 3"
                        className="selectors-checkbox-6"
                        label="off"
                        size="twenty-four-px"
                        state="default"
                      />
                    )}
                  </div>
                  <div className="checkbox-row">
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName="selectors-checkbox-4"
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName={`${
                        width === "seven-hundred-and-fifty-six-px-and-504px" &&
                        "selectors-checkbox-8"
                      } ${
                        width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" &&
                        "selectors-checkbox-4"
                      }`}
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName={`${
                        width === "seven-hundred-and-fifty-six-px-and-504px" &&
                        "selectors-checkbox-9"
                      } ${
                        width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" &&
                        "selectors-checkbox-4"
                      }`}
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    {width ===
                      "one-thousand-two-hundred-and-sixty-px-and-above" && (
                      <SelectorsCheckbox
                        checkboxCheckboxClassName="selectors-checkbox-5"
                        checkboxDescriptionClassName="selectors-checkbox-7"
                        checkboxSelectorClassName="selectors-checkbox-4"
                        checkboxText="Option 3"
                        className="selectors-checkbox-6"
                        label="off"
                        size="twenty-four-px"
                        state="default"
                      />
                    )}
                  </div>
                  <div className="checkbox-row">
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName="selectors-checkbox-4"
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName={`${
                        width === "seven-hundred-and-fifty-six-px-and-504px" &&
                        "selectors-checkbox-8"
                      } ${
                        width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" &&
                        "selectors-checkbox-4"
                      }`}
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName={`${
                        width === "seven-hundred-and-fifty-six-px-and-504px" &&
                        "selectors-checkbox-9"
                      } ${
                        width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" &&
                        "selectors-checkbox-4"
                      }`}
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    {width ===
                      "one-thousand-two-hundred-and-sixty-px-and-above" && (
                      <SelectorsCheckbox
                        checkboxCheckboxClassName="selectors-checkbox-5"
                        checkboxDescriptionClassName="selectors-checkbox-7"
                        checkboxSelectorClassName="selectors-checkbox-4"
                        checkboxText="Option 3"
                        className="selectors-checkbox-6"
                        label="off"
                        size="twenty-four-px"
                        state="default"
                      />
                    )}
                  </div>
                  <div className="checkbox-row">
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName="selectors-checkbox-4"
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName={`${
                        width === "seven-hundred-and-fifty-six-px-and-504px" &&
                        "selectors-checkbox-8"
                      } ${
                        width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" &&
                        "selectors-checkbox-4"
                      }`}
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    <SelectorsCheckbox
                      checkboxCheckboxClassName="selectors-checkbox-5"
                      checkboxDescriptionClassName="selectors-checkbox-7"
                      checkboxSelectorClassName={`${
                        width === "seven-hundred-and-fifty-six-px-and-504px" &&
                        "selectors-checkbox-9"
                      } ${
                        width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" &&
                        "selectors-checkbox-4"
                      }`}
                      checkboxText="Option 3"
                      className="selectors-checkbox-6"
                      label="off"
                      size="twenty-four-px"
                      state="default"
                    />
                    {width ===
                      "one-thousand-two-hundred-and-sixty-px-and-above" && (
                      <SelectorsCheckbox
                        checkboxCheckboxClassName="selectors-checkbox-5"
                        checkboxDescriptionClassName="selectors-checkbox-7"
                        checkboxSelectorClassName="selectors-checkbox-4"
                        checkboxText="Option 3"
                        className="selectors-checkbox-6"
                        label="off"
                        size="twenty-four-px"
                        state="default"
                      />
                    )}
                  </div>
                  {moreLabel && (
                    <>
                      <div className="checkbox-row">
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName="selectors-checkbox-4"
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "seven-hundred-and-fifty-six-px-and-504px" &&
                            "selectors-checkbox-8"
                          } ${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "seven-hundred-and-fifty-six-px-and-504px" &&
                            "selectors-checkbox-9"
                          } ${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        {width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" && (
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-5"
                            checkboxDescriptionClassName="selectors-checkbox-7"
                            checkboxSelectorClassName="selectors-checkbox-4"
                            checkboxText="Option 3"
                            className="selectors-checkbox-6"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                        )}
                      </div>
                      <div className="checkbox-row">
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName="selectors-checkbox-4"
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "seven-hundred-and-fifty-six-px-and-504px" &&
                            "selectors-checkbox-8"
                          } ${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "seven-hundred-and-fifty-six-px-and-504px" &&
                            "selectors-checkbox-9"
                          } ${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        {width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" && (
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-5"
                            checkboxDescriptionClassName="selectors-checkbox-7"
                            checkboxSelectorClassName="selectors-checkbox-4"
                            checkboxText="Option 3"
                            className="selectors-checkbox-6"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                        )}
                      </div>
                      <div className="checkbox-row">
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName="selectors-checkbox-4"
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "seven-hundred-and-fifty-six-px-and-504px" &&
                            "selectors-checkbox-8"
                          } ${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "seven-hundred-and-fifty-six-px-and-504px" &&
                            "selectors-checkbox-9"
                          } ${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        {width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" && (
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-5"
                            checkboxDescriptionClassName="selectors-checkbox-7"
                            checkboxSelectorClassName="selectors-checkbox-4"
                            checkboxText="Option 3"
                            className="selectors-checkbox-6"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                        )}
                      </div>
                      <div className="checkbox-row">
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName="selectors-checkbox-4"
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "seven-hundred-and-fifty-six-px-and-504px" &&
                            "selectors-checkbox-8"
                          } ${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        <SelectorsCheckbox
                          checkboxCheckboxClassName="selectors-checkbox-5"
                          checkboxDescriptionClassName="selectors-checkbox-7"
                          checkboxSelectorClassName={`${
                            width ===
                              "seven-hundred-and-fifty-six-px-and-504px" &&
                            "selectors-checkbox-9"
                          } ${
                            width ===
                              "one-thousand-two-hundred-and-sixty-px-and-above" &&
                            "selectors-checkbox-4"
                          }`}
                          checkboxText="Option 3"
                          className="selectors-checkbox-6"
                          label="off"
                          size="twenty-four-px"
                          state="default"
                        />
                        {width ===
                          "one-thousand-two-hundred-and-sixty-px-and-above" && (
                          <SelectorsCheckbox
                            checkboxCheckboxClassName="selectors-checkbox-5"
                            checkboxDescriptionClassName="selectors-checkbox-7"
                            checkboxSelectorClassName="selectors-checkbox-4"
                            checkboxText="Option 3"
                            className="selectors-checkbox-6"
                            label="off"
                            size="twenty-four-px"
                            state="default"
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

          {(chips || state === "default") && (
            <TabMenuFilters
              className="tab-menu-filters-6"
              state="default"
              tab4={false}
              tab5={false}
              tab6={false}
              tab7={false}
              tabMenuItemsWebIconsExpandWrapperImg="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
              tabMenuItemsWebIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--73.svg"
              tabMenuItemsWebIconsExpandWrapperWebIconsExpand1="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--72.svg"
            />
          )}
        </div>
      )}

      {width === "seven-hundred-and-fifty-six-px-and-504px" &&
        (chips || state === "default") && (
          <div className="dropdown-default-wrapper">
            <DropdownDefault
              atomsDropdowIconsAtomsDropdowIconsClassName={`${
                chips && "dropdown-default-dropdown"
              } ${state === "default" && "dropdown-default-dropdown"}`}
              atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--62.svg"
              className="dropdown-default-2"
              complete={false}
              hintSelectionClassName="dropdown-default-instance"
              leftLabel
              size="forty-px"
              state="default"
              text="Sort by"
              text1="Relevance"
            />
          </div>
        )}

      {chips && width === "seven-hundred-and-fifty-six-px-and-504px" && (
        <>
          <>
            {false && (
              <div className="chips-wrapper">
                <div className="chips-2">
                  <Chips
                    buttonIconButtonButtonNoText={
                      <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-250.svg" />
                    }
                    className="instance-node-3"
                    state="selected"
                    text="Chip label"
                  />
                  <Chips
                    buttonIconButtonButtonNoText={
                      <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                    }
                    className="instance-node-3"
                    state="selected"
                    text="Chip label"
                  />
                  <Chips
                    buttonIconButtonButtonNoText={
                      <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                    }
                    className="instance-node-3"
                    state="selected"
                    text="Chip label"
                  />
                </div>
              </div>
            )}
          </>
          <>
            {false && (
              <div className="chips-wrapper">
                <div className="chips-2">
                  <Chips
                    buttonIconButtonButtonNoText={
                      <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-250.svg" />
                    }
                    className="instance-node-3"
                    state="selected"
                    text="Chip label"
                  />
                  <Chips
                    buttonIconButtonButtonNoText={
                      <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                    }
                    className="instance-node-3"
                    state="selected"
                    text="Chip label"
                  />
                  <Chips
                    buttonIconButtonButtonNoText={
                      <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-249.svg" />
                    }
                    className="instance-node-3"
                    state="selected"
                    text="Chip label"
                  />
                </div>
              </div>
            )}
          </>
        </>
      )}

      {width === "seven-hundred-and-fifty-six-px-and-504px" &&
        (chips || state === "default") && (
          <>
            <>
              {resetLink && (
                <EnhancedStandaloneLinks
                  className="instance-node-3"
                  enhancedStandalone={<WebIconsReset />}
                  enhancedStandaloneText="Clear filters"
                  enhancedStandaloneTextClassName="enhanced-standalone-instance"
                  fontSize="sixteen-pt"
                  iconPosition="left"
                  inverse={false}
                  state="default"
                />
              )}
            </>
          </>
        )}

      {!chips && state === "active-selected" && (
        <>
          <>
            {moreLink && (
              <div className="link-container">
                {!moreLabel && (
                  <EnhancedStandaloneLinks
                    className="enhanced-standalone-links-instance"
                    fontSize="sixteen-pt"
                    iconPosition="right"
                    inverse={false}
                    state="default"
                    text="More [Label]"
                  />
                )}

                {moreLabel && (
                  <>
                    <>
                      {resetLink && (
                        <EnhancedStandaloneLinks
                          className="enhanced-standalone-links-instance"
                          fontSize="sixteen-pt"
                          iconPosition="right"
                          inverse={false}
                          state="default"
                          text="Less [Label]"
                          webIconsForward={
                            width === "seven-hundred-and-fifty-six-px-and-504px"
                              ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--3.svg"
                              : [
                                  "one-thousand-and-eight-px-and-767px",
                                  "one-thousand-two-hundred-and-sixty-px-and-above"
                                ].includes(width)
                              ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--7.svg"
                              : undefined
                          }
                        />
                      )}
                    </>
                  </>
                )}
              </div>
            )}
          </>
        </>
      )}

      {!moreLabel &&
        !chips &&
        state === "active-selected" &&
        width === "seven-hundred-and-fifty-six-px-and-504px" && (
          <div className="dropdown-default-dropdown-wrapper">
            <DropdownDefault
              atomsDropdowIconsAtomsDropdowIconsClassName="dropdown-default-dropdown"
              atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--62.svg"
              className="dropdown-default-2"
              complete={false}
              hintSelectionClassName="dropdown-default-instance"
              leftLabel
              size="forty-px"
              state="default"
              text="Sort by"
              text1="Relevance"
            />
          </div>
        )}

      {moreLabel && width === "seven-hundred-and-fifty-six-px-and-504px" && (
        <DropdownDefault
          atomsDropdowIconsAtomsDropdowIconsClassName="dropdown-default-dropdown"
          atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--62.svg"
          className="dropdown-default-3"
          complete={false}
          hintSelectionClassName="dropdown-default-instance"
          leftLabel
          size="forty-px"
          state="default"
          text="Sort by"
          text1="Relevance"
        />
      )}
    </div>
  );
};

HorizontalFilter.propTypes = {
  title: PropTypes.bool,
  checkbox4: PropTypes.bool,
  moreLink: PropTypes.bool,
  resultsText: PropTypes.bool,
  resetLink: PropTypes.bool,
  width: PropTypes.oneOf([
    "seven-hundred-and-fifty-six-px-and-504px",
    "one-thousand-two-hundred-and-sixty-px-and-above",
    "one-thousand-and-eight-px-and-767px"
  ]),
  state: PropTypes.oneOf(["active-selected", "default"]),
  moreLabel: PropTypes.bool,
  chips: PropTypes.bool,
  hasFilterContainer: PropTypes.bool,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand:
    PropTypes.string,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperImg: PropTypes.string,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand1:
    PropTypes.string,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand2:
    PropTypes.string,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand3:
    PropTypes.string,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand4:
    PropTypes.string,
  tabMenuFiltersTabMenuItemsWebIconsExpandWrapperWebIconsExpand5:
    PropTypes.string,
  hasCheckboxGroup: PropTypes.bool
};
