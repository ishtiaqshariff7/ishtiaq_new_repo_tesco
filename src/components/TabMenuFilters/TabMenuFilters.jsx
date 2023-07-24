/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Divider } from "../Divider";
import { TabMenuItems } from "../TabMenuItems";
import "./style.css";

export const TabMenuFilters = ({
  tab7 = true,
  tab6 = true,
  tab5 = true,
  tab4 = true,
  tab3 = true,
  state,
  className,
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
  tabMenuItemsWebIconsExpandWrapperImg = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand1 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand2 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand3 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand4 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand5 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
  tabMenuItemsStateActiveClassName,
  tabMenuItemsWebIconsContract,
  tabMenuItemsStateActiveClassNameOverride,
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand6 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
  tabMenuItemsStateHoverSelectedClassName,
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand7 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg",
  dividerColorDarkGreyClassName,
}) => {
  return (
    <div className={`tab-menu-filters state-0-${state} ${className}`}>
      <div className="tabs">
        {state === "active-selected" && (
          <TabMenuItems
            className={tabMenuItemsStateActiveClassName}
            state="active-selected"
            webIconsContract={tabMenuItemsWebIconsContract}
            width="default"
          />
        )}

        <TabMenuItems
          className={`${state === "default" ? "tab-menu-items-instance" : tabMenuItemsStateActiveClassNameOverride}`}
          state="inactive"
          webIconsExpandWrapperWebIconsExpand={
            state === "default"
              ? tabMenuItemsWebIconsExpandWrapperWebIconsExpand
              : tabMenuItemsWebIconsExpandWrapperWebIconsExpand6
          }
          width="default"
        />
        {state === "active-selected" && (
          <>
            <>
              {tab3 && (
                <TabMenuItems
                  className={tabMenuItemsStateHoverSelectedClassName}
                  state="inactive"
                  webIconsExpandWrapperWebIconsExpand={tabMenuItemsWebIconsExpandWrapperWebIconsExpand7}
                  width="default"
                />
              )}
            </>
            <>
              {tab4 && (
                <TabMenuItems
                  className="tab-menu-items-2"
                  state="inactive"
                  webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg"
                  width="default"
                />
              )}
            </>
            <>
              {tab5 && (
                <TabMenuItems
                  className="tab-menu-items-3"
                  state="inactive"
                  webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg"
                  width="default"
                />
              )}
            </>
            <>
              {tab6 && (
                <TabMenuItems
                  className="tab-menu-items-4"
                  state="inactive"
                  webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg"
                  width="default"
                />
              )}
            </>
            <>
              {tab7 && (
                <TabMenuItems
                  className="tab-menu-items-5"
                  state="inactive"
                  webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--28.svg"
                  width="default"
                />
              )}
            </>
            <Divider className={dividerColorDarkGreyClassName} color="dark-grey" />
          </>
        )}

        {state === "default" && (
          <>
            <TabMenuItems
              className="tab-menu-items-instance"
              state="inactive"
              webIconsExpandWrapperWebIconsExpand={tabMenuItemsWebIconsExpandWrapperImg}
              width="default"
            />
            <>
              {tab3 && (
                <TabMenuItems
                  className="tab-menu-items-instance"
                  state="inactive"
                  webIconsExpandWrapperWebIconsExpand={tabMenuItemsWebIconsExpandWrapperWebIconsExpand1}
                  width="default"
                />
              )}
            </>
            <>
              {tab4 && (
                <TabMenuItems
                  className="tab-menu-items-instance"
                  state="inactive"
                  webIconsExpandWrapperWebIconsExpand={tabMenuItemsWebIconsExpandWrapperWebIconsExpand2}
                  width="default"
                />
              )}
            </>
            <>
              {tab5 && (
                <TabMenuItems
                  className="tab-menu-items-instance"
                  state="inactive"
                  webIconsExpandWrapperWebIconsExpand={tabMenuItemsWebIconsExpandWrapperWebIconsExpand3}
                  width="default"
                />
              )}
            </>
            <>
              {tab6 && (
                <TabMenuItems
                  className="tab-menu-items-instance"
                  state="inactive"
                  webIconsExpandWrapperWebIconsExpand={tabMenuItemsWebIconsExpandWrapperWebIconsExpand4}
                  width="default"
                />
              )}
            </>
            <>
              {tab7 && (
                <TabMenuItems
                  className="tab-menu-items-instance"
                  state="inactive"
                  webIconsExpandWrapperWebIconsExpand={tabMenuItemsWebIconsExpandWrapperWebIconsExpand5}
                  width="default"
                />
              )}
            </>
          </>
        )}
      </div>
    </div>
  );
};

TabMenuFilters.propTypes = {
  tab7: PropTypes.bool,
  tab6: PropTypes.bool,
  tab5: PropTypes.bool,
  tab4: PropTypes.bool,
  tab3: PropTypes.bool,
  state: PropTypes.oneOf(["active-selected", "default"]),
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand: PropTypes.string,
  tabMenuItemsWebIconsExpandWrapperImg: PropTypes.string,
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand1: PropTypes.string,
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand2: PropTypes.string,
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand3: PropTypes.string,
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand4: PropTypes.string,
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand5: PropTypes.string,
  tabMenuItemsWebIconsContract: PropTypes.string,
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand6: PropTypes.string,
  tabMenuItemsWebIconsExpandWrapperWebIconsExpand7: PropTypes.string,
};
