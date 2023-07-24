/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MenuItemGlobal } from "../MenuItemGlobal";
import { WebIconsStore } from "../WebIconsStore";
import "./style.css";

export const GlobalNavigation = ({
  menuItem6 = true,
  menuItem5 = true,
  menuItem4 = true,
  menuItem3 = true,
  menuItem2 = true,
  menuItem1 = true,
  menuItemGlobalText = "Menu label",
  menuItemGlobalText1 = "Menu label",
  menuItemGlobalText2 = "Menu label",
  menuItemGlobalIcon,
  menuItemGlobalText3 = "Menu label",
  menuItemGlobalText4 = "Menu label",
  menuItemGlobal,
  menuItemGlobalText5 = "Menu label",
  override,
  className,
  menuItemGlobal1,
  menuItemGlobalFlagsFlagGreat,
  menuItemGlobalLabelClassName,
  menuItemGlobalFlagsFlagGreatClassName,
  menuItemGlobalType = "label",
  menuItemGlobal2,
  menuItemGlobal3 = (
    <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-8.svg" />
  ),
}) => {
  return (
    <div className={`global-navigation ${className}`}>
      <div className="div-5">
        {menuItem1 && (
          <MenuItemGlobal className="menu-item" icon={false} state="default" text={menuItemGlobalText} type="label" />
        )}

        {menuItem2 && (
          <MenuItemGlobal
            className="menu-item"
            icon={false}
            override={menuItemGlobal1}
            state="default"
            text={menuItemGlobalText1}
            type="label"
          />
        )}

        {menuItem3 && (
          <MenuItemGlobal
            className="menu-item"
            flagsFlagGreat={menuItemGlobalFlagsFlagGreat}
            flagsFlagGreatClassName={menuItemGlobalFlagsFlagGreatClassName}
            icon={false}
            labelClassName={menuItemGlobalLabelClassName}
            override={override}
            state="default"
            text={menuItemGlobalText2}
            type={menuItemGlobalType}
          />
        )}

        {menuItem4 && (
          <MenuItemGlobal
            className="menu-item"
            icon={menuItemGlobalIcon}
            override={menuItemGlobal3}
            state="default"
            text={menuItemGlobalText3}
            type="label"
          />
        )}

        {menuItem5 && (
          <MenuItemGlobal
            className="menu-item"
            icon={false}
            override={menuItemGlobal2}
            state="default"
            text={menuItemGlobalText4}
            type="label"
          />
        )}

        {menuItem6 && (
          <MenuItemGlobal
            className="menu-item"
            icon={false}
            override={menuItemGlobal}
            state="default"
            text={menuItemGlobalText5}
            type="label"
          />
        )}
      </div>
    </div>
  );
};

GlobalNavigation.propTypes = {
  menuItem6: PropTypes.bool,
  menuItem5: PropTypes.bool,
  menuItem4: PropTypes.bool,
  menuItem3: PropTypes.bool,
  menuItem2: PropTypes.bool,
  menuItem1: PropTypes.bool,
  menuItemGlobalText: PropTypes.string,
  menuItemGlobalText1: PropTypes.string,
  menuItemGlobalText2: PropTypes.string,
  menuItemGlobalIcon: PropTypes.bool,
  menuItemGlobalText3: PropTypes.string,
  menuItemGlobalText4: PropTypes.string,
  menuItemGlobalText5: PropTypes.string,
  menuItemGlobalFlagsFlagGreat: PropTypes.string,
  menuItemGlobalType: PropTypes.string,
};
