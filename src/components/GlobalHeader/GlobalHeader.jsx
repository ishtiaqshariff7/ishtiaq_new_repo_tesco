/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import { GlobalHeaderElementsSearchWithDropdown756PxAndAbove } from "../GlobalHeaderElementsSearchWithDropdown756PxAndAbove";
import { ScreenAndWrapper } from "../ScreenAndWrapper";
import { TescoLogosTesco } from "../TescoLogosTesco";
import { WebIconsAccount } from "../WebIconsAccount";
import { WebIconsBasket } from "../WebIconsBasket";
import { WebIconsSearch } from "../WebIconsSearch";
import { WebIconsStore } from "../WebIconsStore";
import "./style.css";

export const GlobalHeader = ({
  flyOutMenu,
  className,
  override = (
    <ConcreteComponentNode
      className="global-navigation-instance"
      globalNavigationMenuItemGlobal={
        <WebIconsAccount union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-217.svg" />
      }
      screen="seven-hundred-and-fifty-six-px-and-above"
      type="dotcom"
    />
  ),
  outerContainerClassName,
  propertyContainerClassName,
  logoContainerClassName,
  tescoLogosTescoTypeBankNativeClassName,
  tescoLogosTescoFill,
  tescoLogosTescoText,
  tescoLogosTescoType = "medium",
  tescoLogosTescoImg,
  visible = true,
  visible1 = true,
}) => {
  return (
    <div className={`global-header ${className}`}>
      <div className="div-2">
        {!flyOutMenu && <>{override}</>}

        {flyOutMenu && (
          <>
            <ConcreteComponentNode
              className="global-navigation-instance"
              globalNavigationMenuItemGlobal={
                <WebIconsAccount union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-217.svg" />
              }
              override={
                <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-218.svg" />
              }
              screen="seven-hundred-and-fifty-six-px-and-above"
              type="dotcom"
            />
            <div className="background-overlay" />
          </>
        )}
      </div>
      <div className={`outer-container fly-out-menu-${flyOutMenu} ${outerContainerClassName}`}>
        <div className="inner-container-wrapper">
          <div className="inner-container">
            <div className="container-2">
              {!flyOutMenu && (
                <>
                  <div className={`property-container ${propertyContainerClassName}`}>
                    <div className={`logo-container ${logoContainerClassName}`}>
                      <TescoLogosTesco
                        fill={tescoLogosTescoFill}
                        fill1="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-1-7.svg"
                        fill2="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-3-7.svg"
                        img={tescoLogosTescoImg}
                        text={tescoLogosTescoText}
                        type={tescoLogosTescoType}
                        typeBankNativeClassName={tescoLogosTescoTypeBankNativeClassName}
                      />
                    </div>
                    <div className="search-with-dropdown-wrapper">
                      {visible && (
                        <GlobalHeaderElementsSearchWithDropdown756PxAndAbove
                          className="instance-node-2"
                          globalHeaderElementsBasketButtonIconButtonButtonPxNoText={
                            <WebIconsBasket union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-214.svg" />
                          }
                          searchWithDropdownDropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--12.svg"
                          searchWithDropdownSearchInput={
                            <WebIconsSearch union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-215.svg" />
                          }
                          searchWithDropdownSearchInputLeadingIconWebIconsSearchUnion="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-216.svg"
                        />
                      )}
                    </div>
                  </div>
                  <>
                    {visible1 && (
                      <ScreenAndWrapper
                        className="local-navigation-instance"
                        flyOut={false}
                        leftContainerClassName="local-navigation-2"
                        localNavigationText="Menu item"
                        localNavigationTypeDefaultStateClassName="instance-node-2"
                        screen="one-thousand-and-eight-px-and-above"
                        truncateActive={false}
                      />
                    )}
                  </>
                </>
              )}

              {flyOutMenu && (
                <>
                  <div className="property-container">
                    <div className="logo-container">
                      <TescoLogosTesco
                        fill1="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-1-7.svg"
                        fill2="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-3-7.svg"
                        type="medium"
                        typeBankNativeClassName="tesco-logos-tesco"
                      />
                    </div>
                    <div className="search-with-dropdown-wrapper">
                      <GlobalHeaderElementsSearchWithDropdown756PxAndAbove
                        className="instance-node-2"
                        globalHeaderElementsBasketButtonIconButtonButtonPxNoText={
                          <WebIconsBasket union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-214.svg" />
                        }
                        searchWithDropdownDropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--12.svg"
                        searchWithDropdownSearchInput={
                          <WebIconsSearch union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-215.svg" />
                        }
                        searchWithDropdownSearchInputLeadingIconWebIconsSearchUnion="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-216.svg"
                      />
                    </div>
                  </div>
                  <div className="background-overlay-2" />
                  <ScreenAndWrapper
                    className="local-navigation-23"
                    flyOut
                    icon="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon1="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon10="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon11="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon12="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-24.svg"
                    icon13="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon14="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon15="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon16="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon17="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon2="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon3="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon4="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon5="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon6="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon7="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon8="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    icon9="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-37.svg"
                    iconClassName="local-navigation-4"
                    iconClassName1="local-navigation-8"
                    iconClassName10="local-navigation-17"
                    iconClassName11="local-navigation-18"
                    iconClassName12="local-navigation-19"
                    iconClassName13="local-navigation-20"
                    iconClassName14="local-navigation-21"
                    iconClassName15="local-navigation-22"
                    iconClassName2="local-navigation-9"
                    iconClassName3="local-navigation-10"
                    iconClassName4="local-navigation-11"
                    iconClassName5="local-navigation-12"
                    iconClassName6="local-navigation-13"
                    iconClassName7="local-navigation-14"
                    iconClassName8="local-navigation-15"
                    iconClassName9="local-navigation-16"
                    iconClassNameOverride="local-navigation-5"
                    img="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-36.svg"
                    imgClassName="local-navigation-6"
                    imgClassNameOverride="local-navigation-7"
                    leftContainerClassNameOverride="local-navigation-2"
                    screen="one-thousand-and-eight-px-and-above"
                    truncateActive={false}
                    webIconsBackwardWrapperWebIconsBackwardClassName="local-navigation-3"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GlobalHeader.propTypes = {
  flyOutMenu: PropTypes.bool,
  tescoLogosTescoFill: PropTypes.string,
  tescoLogosTescoText: PropTypes.string,
  tescoLogosTescoType: PropTypes.string,
  tescoLogosTescoImg: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
};
