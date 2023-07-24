/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { GlobalNavigation } from "../GlobalNavigation";
import { WebIconsAccount } from "../WebIconsAccount";
import { WebIconsStore } from "../WebIconsStore";
import "./style.css";

export const ConcreteComponentNode = ({
  type,
  screen,
  className,
  globalNavigationMenuItemGlobal = (
    <WebIconsAccount union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-217.svg" />
  ),
  override = (
    <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-218.svg" />
  ),
}) => {
  return (
    <div className={`concrete-component-node ${screen} ${className}`}>
      {screen === "seven-hundred-and-fifty-six-px-and-above" && (
        <GlobalNavigation
          className="global-navigation-2"
          menuItem5={["clubcard", "groceries-signed-out"].includes(type) ? false : undefined}
          menuItem6={
            ["clubcard", "generic", "groceries-signed-out", "mobile-microsite", "signed-in"].includes(type)
              ? false
              : undefined
          }
          menuItemGlobal={globalNavigationMenuItemGlobal}
          menuItemGlobal1={
            ["clubcard", "generic", "mobile-microsite"].includes(type) ? (
              <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-218.svg" />
            ) : undefined
          }
          menuItemGlobal2={
            type === "generic" ? (
              <WebIconsAccount union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-217.svg" />
            ) : undefined
          }
          menuItemGlobal3={
            type === "custom" ? (
              <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-15.svg" />
            ) : undefined
          }
          menuItemGlobalFlagsFlagGreat={
            type === "generic"
              ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/flags-flag---great-britain-3.svg"
              : undefined
          }
          menuItemGlobalFlagsFlagGreatClassName={`${type === "generic" && "class-50"}`}
          menuItemGlobalIcon={
            type === "clubcard" ||
            type === "dotcom" ||
            type === "generic" ||
            type === "groceries-signed-in" ||
            type === "groceries-signed-out" ||
            type === "mobile-microsite" ||
            type === "signed-in"
              ? false
              : undefined
          }
          menuItemGlobalLabelClassName={`${type === "generic" && "class-49"}`}
          menuItemGlobalText={
            type === "signed-in"
              ? "Tesco.com"
              : type === "groceries-signed-in"
              ? "Hello [Name]"
              : type === "custom"
              ? "Menu label"
              : "Sign in"
          }
          menuItemGlobalText1={
            ["dotcom", "groceries-signed-out"].includes(type)
              ? "Register"
              : type === "signed-in"
              ? "Contact us"
              : type === "groceries-signed-in"
              ? "My orders"
              : type === "custom"
              ? "Menu label"
              : "Store locater"
          }
          menuItemGlobalText2={
            type === "dotcom"
              ? "Store locater"
              : type === "generic"
              ? "English"
              : type === "clubcard"
              ? "Website feedback"
              : type === "mobile-microsite"
              ? "Contact us"
              : type === "groceries-signed-in"
              ? "My account"
              : type === "custom"
              ? "Menu label"
              : "Help"
          }
          menuItemGlobalText3={
            type === "dotcom"
              ? "Contact us"
              : type === "clubcard"
              ? "Tesco.com"
              : ["groceries-signed-out", "signed-in"].includes(type)
              ? "Feedback"
              : type === "groceries-signed-in"
              ? "Sign out"
              : type === "custom"
              ? "Menu label"
              : "Help"
          }
          menuItemGlobalText4={
            ["dotcom", "groceries-signed-in"].includes(type)
              ? "Help"
              : type === "generic"
              ? "My account"
              : type === "mobile-microsite"
              ? "Tesco.com"
              : type === "signed-in"
              ? "Sign out"
              : type === "custom"
              ? "Menu label"
              : undefined
          }
          menuItemGlobalText5={
            type === "dotcom"
              ? "My account"
              : type === "groceries-signed-in"
              ? "Feedback"
              : type === "custom"
              ? "Menu label"
              : undefined
          }
          menuItemGlobalType={
            type === "generic"
              ? "flag"
              : [
                  "clubcard",
                  "custom",
                  "groceries-signed-in",
                  "groceries-signed-out",
                  "mobile-microsite",
                  "signed-in",
                ].includes(type)
              ? "label"
              : undefined
          }
          override={override}
        />
      )}

      {screen === "seven-hundred-and-fifty-five-px-and-below" && (
        <div className="div-6">
          <div className="menu-item-2">
            <div className="div-6">
              <div className="icon-and-label-4">
                <div className="label-i-wrapper">
                  <div className="label-i">
                    {["clubcard", "dotcom", "generic", "groceries-signed-out", "mobile-microsite"].includes(type) && (
                      <>Sign in</>
                    )}

                    {type === "signed-in" && <>Tesco.com</>}

                    {type === "groceries-signed-in" && <>Hello [Name]</>}

                    {type === "custom" && <>Menu label</>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-item-2">
            <div className="border-top-2" />
            <div className="div-6">
              <div className="icon-and-label-4">
                <div className="label-i-wrapper">
                  <div className="label-i">
                    {["clubcard", "generic", "mobile-microsite"].includes(type) && <>Store locator</>}

                    {["dotcom", "groceries-signed-out"].includes(type) && <>Register</>}

                    {type === "groceries-signed-in" && <>My orders</>}

                    {type === "custom" && <>Menu label</>}

                    {type === "signed-in" && <>Contact us</>}
                  </div>
                </div>
                {["clubcard", "generic", "mobile-microsite"].includes(type) && (
                  <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-218.svg" />
                )}
              </div>
            </div>
          </div>
          {["clubcard", "generic", "groceries-signed-out", "mobile-microsite", "signed-in"].includes(type) && (
            <div className={`menu-item-3 ${type}`}>
              <div className="border-top-2" />
              <div className="div-6">
                <div className="icon-and-label-4">
                  <div className="label-i-wrapper">
                    <div className="label-i">
                      {type === "generic" && <>English</>}

                      {type === "mobile-microsite" && <>Contact us</>}

                      {["groceries-signed-out", "signed-in"].includes(type) && <>Help</>}

                      {type === "clubcard" && <>Website feedback</>}
                    </div>
                  </div>
                  {type === "generic" && (
                    <img
                      className="flags-flag-great-2"
                      alt="Flags flag great"
                      src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/flags-flag---great-britain-2.svg"
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="menu-item-2">
            <div className="border-top-2" />
            <div className="div-6">
              <div className="icon-and-label-4">
                <div className="label-i-wrapper">
                  <div className="label-i">
                    {type === "dotcom" && <>Store locator</>}

                    {["groceries-signed-out", "signed-in"].includes(type) && <>Feedback</>}

                    {type === "clubcard" && <>Tesco.com</>}

                    {type === "groceries-signed-in" && <>My account</>}

                    {type === "custom" && <>Menu label</>}

                    {["generic", "mobile-microsite"].includes(type) && <>Help</>}
                  </div>
                </div>
                {type === "dotcom" && (
                  <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-218.svg" />
                )}
              </div>
            </div>
          </div>
          {["custom", "dotcom", "generic", "groceries-signed-in", "mobile-microsite", "signed-in"].includes(type) && (
            <div className="menu-item-2">
              <div className="border-top-2" />
              <div className="div-6">
                <div className="icon-and-label-4">
                  <div className="label-i-wrapper">
                    <div className="label-i">
                      {type === "custom" && <>Menu label</>}

                      {type === "dotcom" && <>Contact us</>}

                      {["groceries-signed-in", "signed-in"].includes(type) && <>Sign out</>}

                      {["generic", "mobile-microsite"].includes(type) && <>Tesco.com</>}
                    </div>
                  </div>
                  {type === "custom" && (
                    <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-218.svg" />
                  )}
                </div>
              </div>
            </div>
          )}

          {["custom", "dotcom", "groceries-signed-in"].includes(type) && (
            <>
              <div className="menu-item-2">
                <div className="border-top-2" />
                <div className="div-6">
                  <div className="icon-and-label-4">
                    <div className="label-i-wrapper">
                      <div className="label-i">
                        {["dotcom", "groceries-signed-in"].includes(type) && <>Help</>}

                        {type === "custom" && <>Menu label</>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item-2">
                <div className="border-top-2" />
                <div className="div-6">
                  <div className="icon-and-label-4">
                    <div className="label-i-wrapper">
                      <div className="label-i">
                        {type === "groceries-signed-in" && <>Feedback</>}

                        {type === "custom" && <>Menu label</>}

                        {type === "dotcom" && <>My account</>}
                      </div>
                    </div>
                    {type === "dotcom" && (
                      <WebIconsAccount union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-217.svg" />
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

ConcreteComponentNode.propTypes = {
  type: PropTypes.oneOf([
    "mobile-microsite",
    "generic",
    "signed-in",
    "custom",
    "groceries-signed-out",
    "groceries-signed-in",
    "clubcard",
    "dotcom",
  ]),
  screen: PropTypes.oneOf(["seven-hundred-and-fifty-six-px-and-above", "seven-hundred-and-fifty-five-px-and-below"]),
};
