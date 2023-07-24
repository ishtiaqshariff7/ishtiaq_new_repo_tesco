/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Crossplatform } from "../Crossplatform";
import { Divider } from "../Divider";
import { LocalNavigation } from "../LocalNavigation";
import { WebIconsBackwardWrapper } from "../WebIconsBackwardWrapper";
import "./style.css";

export const ScreenAndWrapper = ({
  adminItem,
  item2 = true,
  item3 = true,
  item4 = true,
  item5 = true,
  item6 = true,
  item9 = true,
  item1 = true,
  item7 = true,
  item8 = true,
  screen,
  flyOut,
  truncateActive,
  className,
  leftContainerClassName,
  localNavigationTypeDefaultStateClassName,
  localNavigationText = "Menu item",
  hasRightContainer = true,
  leftContainerClassNameOverride,
  webIconsBackwardWrapperWebIconsBackwardClassName,
  icon = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  img = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-281.svg",
  icon1 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon2 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon3 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon4 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon5 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon6 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon7 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon8 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon9 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon10 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon11 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon12 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-269.svg",
  icon13 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon14 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon15 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon16 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  icon17 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-282.svg",
  iconClassName,
  iconClassNameOverride,
  imgClassName,
  imgClassNameOverride,
  iconClassName1,
  iconClassName2,
  iconClassName3,
  iconClassName4,
  iconClassName5,
  iconClassName6,
  iconClassName7,
  iconClassName8,
  iconClassName9,
  iconClassName10,
  iconClassName11,
  iconClassName12,
  iconClassName13,
  iconClassName14,
  iconClassName15,
}) => {
  return (
    <div className={`screen-and-wrapper fly-out-${flyOut} ${screen} ${className}`}>
      <div className={`left-container ${leftContainerClassName}`}>
        {!flyOut &&
          ["one-thousand-and-eight-px-and-above", "seven-hundred-and-fifty-six-px-and-1007px"].includes(screen) && (
            <>
              <>
                {item1 && (
                  <LocalNavigation
                    className={`${screen === "seven-hundred-and-fifty-six-px-and-1007px" && "local-navigation-item"} ${
                      screen === "one-thousand-and-eight-px-and-above" && localNavigationTypeDefaultStateClassName
                    }`}
                    state="default"
                    text={
                      screen === "seven-hundred-and-fifty-six-px-and-1007px"
                        ? "Menu item"
                        : screen === "one-thousand-and-eight-px-and-above"
                        ? localNavigationText
                        : undefined
                    }
                    type="default"
                  />
                )}
              </>
              <>
                {item2 && (
                  <LocalNavigation className="local-navigation-item" state="default" text="Menu item" type="default" />
                )}
              </>
              <>
                {item3 && (
                  <LocalNavigation className="local-navigation-item" state="default" text="Menu item" type="default" />
                )}
              </>
              <>
                {item4 && (
                  <LocalNavigation className="local-navigation-item" state="default" text="Menu item" type="default" />
                )}
              </>
              <>
                {item5 && (
                  <LocalNavigation className="local-navigation-item" state="default" text="Menu item" type="default" />
                )}
              </>
              <>
                {item6 && (
                  <LocalNavigation
                    className="local-navigation-item"
                    state="default"
                    text={screen === "one-thousand-and-eight-px-and-above" ? "Menu item" : undefined}
                    text1={screen === "seven-hundred-and-fifty-six-px-and-1007px" ? "More" : undefined}
                    type={
                      screen === "seven-hundred-and-fifty-six-px-and-1007px"
                        ? "dropdown"
                        : screen === "one-thousand-and-eight-px-and-above"
                        ? "default"
                        : undefined
                    }
                    webIconsExpandWrapperWebIconsExpand={
                      screen === "seven-hundred-and-fifty-six-px-and-1007px"
                        ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--78.svg"
                        : undefined
                    }
                  />
                )}
              </>
            </>
          )}

        {screen === "one-thousand-and-eight-px-and-above" && !flyOut && (
          <>
            <>
              {item7 && (
                <LocalNavigation className="local-navigation-item" state="default" text="Menu item" type="default" />
              )}
            </>
            <>
              {item8 && (
                <LocalNavigation className="local-navigation-item" state="default" text="Menu item" type="default" />
              )}
            </>
            <>
              {item9 && (
                <LocalNavigation
                  className="local-navigation-item"
                  state="default"
                  text={!truncateActive ? "Menu item" : undefined}
                  text1={truncateActive ? "More" : undefined}
                  type={!truncateActive ? "default" : truncateActive ? "dropdown" : undefined}
                  webIconsExpandWrapperWebIconsExpand={
                    truncateActive
                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--78.svg"
                      : undefined
                  }
                />
              )}
            </>
          </>
        )}

        {!flyOut &&
          ["five-hundred-and-four-px-and-below", "seven-hundred-and-fifty-five-px-and-505px"].includes(screen) && (
            <LocalNavigation
              className={`${
                screen === "five-hundred-and-four-px-and-below" && localNavigationTypeDefaultStateClassName
              } ${screen === "seven-hundred-and-fifty-five-px-and-505px" && "local-navigation-item"}`}
              state="default"
              text={screen === "five-hundred-and-four-px-and-below" ? localNavigationText : undefined}
              text1={screen === "seven-hundred-and-fifty-five-px-and-505px" ? "Menu" : undefined}
              type="dropdown"
              webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--79.svg"
            />
          )}

        {flyOut && (
          <>
            <div className={`left-container-2 ${leftContainerClassNameOverride}`}>
              {["one-thousand-and-eight-px-and-above", "seven-hundred-and-fifty-six-px-and-1007px"].includes(
                screen
              ) && (
                <>
                  <>
                    {item1 && (
                      <LocalNavigation
                        className="local-navigation-item"
                        state={truncateActive ? "default" : !truncateActive ? "selected" : undefined}
                        text="Menu item"
                        type="default"
                      />
                    )}
                  </>
                  <>
                    {item2 && (
                      <LocalNavigation
                        className="local-navigation-item"
                        state="default"
                        text="Menu item"
                        type="default"
                      />
                    )}
                  </>
                  <>
                    {item3 && (
                      <LocalNavigation
                        className="local-navigation-item"
                        state="default"
                        text="Menu item"
                        type="default"
                      />
                    )}
                  </>
                  <>
                    {item4 && (
                      <LocalNavigation
                        className="local-navigation-item"
                        state="default"
                        text="Menu item"
                        type="default"
                      />
                    )}
                  </>
                  <>
                    {item5 && (
                      <LocalNavigation
                        className="local-navigation-item"
                        state="default"
                        text="Menu item"
                        type="default"
                      />
                    )}
                  </>
                  <>
                    {item6 && (
                      <LocalNavigation
                        className="local-navigation-item"
                        state={
                          screen === "one-thousand-and-eight-px-and-above" ||
                          (!truncateActive && screen === "seven-hundred-and-fifty-six-px-and-1007px")
                            ? "default"
                            : truncateActive && screen === "seven-hundred-and-fifty-six-px-and-1007px"
                            ? "selected"
                            : undefined
                        }
                        text={screen === "one-thousand-and-eight-px-and-above" ? "Menu item" : undefined}
                        text1={screen === "seven-hundred-and-fifty-six-px-and-1007px" ? "More" : undefined}
                        type={
                          screen === "one-thousand-and-eight-px-and-above"
                            ? "default"
                            : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                            ? "dropdown"
                            : undefined
                        }
                        webIconsContract={
                          truncateActive && screen === "seven-hundred-and-fifty-six-px-and-1007px"
                            ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--16.svg"
                            : undefined
                        }
                        webIconsExpandWrapperWebIconsExpand={
                          !truncateActive && screen === "seven-hundred-and-fifty-six-px-and-1007px"
                            ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-expand-24px--default--78.svg"
                            : undefined
                        }
                      />
                    )}
                  </>
                </>
              )}

              {screen === "one-thousand-and-eight-px-and-above" && (
                <>
                  <>
                    {item7 && (
                      <LocalNavigation
                        className="local-navigation-item"
                        state="default"
                        text="Menu item"
                        type="default"
                      />
                    )}
                  </>
                  <>
                    {item8 && (
                      <LocalNavigation
                        className="local-navigation-item"
                        state="default"
                        text="Menu item"
                        type="default"
                      />
                    )}
                  </>
                  <>
                    {item9 && (
                      <LocalNavigation
                        className="local-navigation-item"
                        state={truncateActive ? "selected" : !truncateActive ? "default" : undefined}
                        text={!truncateActive ? "Menu item" : undefined}
                        text1={truncateActive ? "More" : undefined}
                        type={truncateActive ? "dropdown" : !truncateActive ? "default" : undefined}
                        webIconsContract={
                          truncateActive
                            ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--16.svg"
                            : undefined
                        }
                      />
                    )}
                  </>
                </>
              )}

              {["five-hundred-and-four-px-and-below", "seven-hundred-and-fifty-five-px-and-505px"].includes(screen) && (
                <LocalNavigation
                  className="local-navigation-item"
                  state="selected"
                  text1={!truncateActive ? "Menu" : undefined}
                  type="dropdown"
                  webIconsContract="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-contract-24px--default--16.svg"
                />
              )}
            </div>
            <div className={`right-container screen-${screen} truncate-active-${truncateActive}`} />
          </>
        )}
      </div>
      {hasRightContainer && (
        <div className={`right-container-2 screen-0-${screen} fly-out-1-${flyOut} truncate-active-0-${truncateActive}`}>
          {flyOut && (
            <>
              <div className="flyout">
                {[
                  "one-thousand-and-eight-px-and-above",
                  "seven-hundred-and-fifty-five-px-and-505px",
                  "seven-hundred-and-fifty-six-px-and-1007px",
                ].includes(screen) && (
                  <>
                    <img
                      className="line-top"
                      alt="Line top"
                      src={
                        screen === "one-thousand-and-eight-px-and-above"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/line-top-6.svg"
                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/line-top-4.svg"
                          : screen === "seven-hundred-and-fifty-five-px-and-505px"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/line-top-2.svg"
                          : undefined
                      }
                    />
                    <div className="label-close">
                      <div className="enhanced-standalone-2">
                        <WebIconsBackwardWrapper
                          className={webIconsBackwardWrapperWebIconsBackwardClassName}
                          webIconsBackward="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--default--20.svg"
                        />
                        <div className="text-i">Back to [category name]</div>
                      </div>
                      <div className="element-non-standard">
                        <div className="label-approx-wrapper">
                          <div className="label-approx">Close</div>
                        </div>
                        <div className="element-non-standard-wrapper">
                          <div className="element-web-icons-close-wrapper">
                            <div className="union-wrapper">
                              <img
                                className="union-2"
                                alt="Union"
                                src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-259.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Divider
                      className={`${screen === "one-thousand-and-eight-px-and-above" && "class-19"} ${
                        [
                          "seven-hundred-and-fifty-five-px-and-505px",
                          "seven-hundred-and-fifty-six-px-and-1007px",
                        ].includes(screen) && "divider-instance"
                      }`}
                      color="light-grey"
                    />
                  </>
                )}

                <div className="div-4">
                  {screen === "five-hundred-and-four-px-and-below" && (
                    <>
                      <img
                        className="line-top"
                        alt="Line top"
                        src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/line-top-1.svg"
                      />
                      <div className="label-close-2">
                        <div className="enhanced-standalone-2">
                          <WebIconsBackwardWrapper
                            className="web-icons-backward-24px-default"
                            webIconsBackward="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/web-icons-backward-24px--default--20.svg"
                          />
                          <div className="text-i">Back to [category name]</div>
                        </div>
                        <div className="element-non-standard">
                          <div className="label-approx-wrapper">
                            <div className="label-approx">Close</div>
                          </div>
                          <div className="element-non-standard-wrapper">
                            <div className="element-web-icons-close-wrapper">
                              <div className="union-wrapper">
                                <img
                                  className="union-2"
                                  alt="Union"
                                  src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-259.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Divider className="divider-instance" color="light-grey" />
                      <Divider className="divider-instance" color="light-grey" />
                      <div className="div-4">
                        <div className="levels">
                          <div className="level">
                            <div className="flyout-cells">
                              <div className="button-container">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="button-container-wrapper">
                              <div className="button-container-2">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-2">
                              <div className="button-container-3">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-3">
                              <div className="button-container-4">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-4">
                              <div className="button-container-5">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-5">
                              <div className="button-container-6">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-6">
                              <div className="button-container-7">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-7">
                              <div className="button-container-8">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-8">
                              <div className="button-container-9">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-9">
                              <div className="button-container-10">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-10">
                              <div className="button-container-11">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-11">
                              <div className="button-container-12">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-12">
                              <div className="button-container-13">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-13">
                              <div className="button-container-14">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-14">
                              <div className="button-container-15">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-15">
                              <div className="button-container-16">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-16">
                              <div className="button-container-17">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="spacer" />
                        <div className="line-bottom" />
                      </div>
                    </>
                  )}

                  {[
                    "one-thousand-and-eight-px-and-above",
                    "seven-hundred-and-fifty-five-px-and-505px",
                    "seven-hundred-and-fifty-six-px-and-1007px",
                  ].includes(screen) && (
                    <>
                      <div className="levels-2">
                        {screen === "one-thousand-and-eight-px-and-above" && (
                          <div className="level-2">
                            <div className="flyout-cells-17">
                              <div className="button-container-18">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-18">
                              <div className="button-container-19">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link-i">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-300.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-19">
                              <div className="button-container-20">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-20">
                              <div className="button-container-21">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-21">
                              <div className="button-container-22">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-22">
                              <div className="button-container-23">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-23">
                              <div className="button-container-24">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-24">
                              <div className="button-container-25">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-25">
                              <div className="button-container-26">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-26">
                              <div className="button-container-27">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-27">
                              <div className="button-container-28">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-28">
                              <div className="button-container-29">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-29">
                              <div className="button-container-30">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-30">
                              <div className="button-container-31">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-31">
                              <div className="button-container-32">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-32">
                              <div className="button-container-33">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-33">
                              <div className="button-container-34">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-34">
                              <div className="button-container-35">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-35">
                              <div className="button-container-36">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu navigation link</div>
                                  </div>
                                  <img
                                    className="icon"
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-301.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                          </div>
                        )}

                        {[
                          "seven-hundred-and-fifty-five-px-and-505px",
                          "seven-hundred-and-fifty-six-px-and-1007px",
                        ].includes(screen) && (
                          <div className="level-wrapper">
                            <div className="level-3">
                              <div className="flyout-cells-36">
                                <div className="button-container-37">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-18">
                                <div className="button-container-38">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link-i">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-110.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-186.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-37">
                                <div className="button-container-39">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-38">
                                <div className="button-container-40">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-39">
                                <div className="button-container-41">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-40">
                                <div className="button-container-42">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-41">
                                <div className="button-container-43">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-42">
                                <div className="button-container-44">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-43">
                                <div className="button-container-45">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-44">
                                <div className="button-container-46">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-45">
                                <div className="button-container-47">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-46">
                                <div className="button-container-48">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-47">
                                <div className="button-container-49">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-48">
                                <div className="button-container-50">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-49">
                                <div className="button-container-51">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-50">
                                <div className="button-container-52">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-51">
                                <div className="button-container-53">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-52">
                                <div className="button-container-54">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flyout-cells-53">
                                <div className="button-container-55">
                                  <div className="text-icon">
                                    <div className="link-wrapper">
                                      <div className="link">Menu navigation link</div>
                                    </div>
                                    <img
                                      className="icon"
                                      alt="Icon"
                                      src={
                                        screen === "seven-hundred-and-fifty-five-px-and-505px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-111.svg"
                                          : screen === "seven-hundred-and-fifty-six-px-and-1007px"
                                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-187.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  {screen === "seven-hundred-and-fifty-six-px-and-1007px" && (
                                    <Divider className="divider-instance" color="light-grey" />
                                  )}

                                  {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                    <div className="structure-don-t-copy-wrapper">
                                      <Crossplatform className="crossplatform-px" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="level-4">
                          <div className="flyout-cells-54">
                            <div className="button-container-56">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-55">
                            <div className="button-container-57">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link-2">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? img
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-56">
                            <div className="button-container-58">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon1
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-57">
                            <div className="button-container-59">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon2
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-58">
                            <div className="button-container-60">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon3
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-59">
                            <div className="button-container-61">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon4
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-60">
                            <div className="button-container-62">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon5
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-61">
                            <div className="button-container-63">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon6
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-62">
                            <div className="button-container-64">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon7
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-63">
                            <div className="button-container-65">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon8
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-64">
                            <div className="button-container-66">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon9
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-65">
                            <div className="button-container-67">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon10
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-66">
                            <div className="button-container-68">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon11
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-67">
                            <div className="button-container-69">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link-3">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon12
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-68">
                            <div className="button-container-70">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon13
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-69">
                            <div className="button-container-71">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon14
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-70">
                            <div className="button-container-72">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon15
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-71">
                            <div className="button-container-73">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon16
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flyout-cells-72">
                            <div className="button-container-74">
                              <div className="text-icon">
                                <div className="link-wrapper">
                                  <div className="link">Menu navigation link</div>
                                </div>
                                <img
                                  className="icon"
                                  alt="Icon"
                                  src={
                                    [
                                      "seven-hundred-and-fifty-five-px-and-505px",
                                      "seven-hundred-and-fifty-six-px-and-1007px",
                                    ].includes(screen)
                                      ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-168.svg"
                                      : screen === "one-thousand-and-eight-px-and-above"
                                      ? icon17
                                      : undefined
                                  }
                                />
                              </div>
                              {[
                                "one-thousand-and-eight-px-and-above",
                                "seven-hundred-and-fifty-six-px-and-1007px",
                              ].includes(screen) && <Divider className="divider-instance" color="light-grey" />}

                              {screen === "seven-hundred-and-fifty-five-px-and-505px" && (
                                <div className="structure-don-t-copy-wrapper">
                                  <Crossplatform className="crossplatform-px" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {screen === "one-thousand-and-eight-px-and-above" && (
                          <div className="level-4">
                            <div className="flyout-cells-73">
                              <div className="button-container-75">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-2 ${iconClassName}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-74">
                              <div className="button-container-76">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-3 ${iconClassNameOverride}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-75">
                              <div className="button-container-77">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-4 ${imgClassName}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-76">
                              <div className="button-container-78">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-5 ${imgClassNameOverride}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-77">
                              <div className="button-container-79">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-6 ${iconClassName1}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-78">
                              <div className="button-container-80">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-7 ${iconClassName2}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-79">
                              <div className="button-container-81">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-8 ${iconClassName3}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-80">
                              <div className="button-container-82">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-9 ${iconClassName4}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-81">
                              <div className="button-container-83">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-10 ${iconClassName5}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-82">
                              <div className="button-container-84">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-11 ${iconClassName6}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-83">
                              <div className="button-container-85">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-12 ${iconClassName7}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-84">
                              <div className="button-container-86">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-13 ${iconClassName8}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-85">
                              <div className="button-container-87">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-14 ${iconClassName9}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-86">
                              <div className="button-container-88">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-15 ${iconClassName10}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-87">
                              <div className="button-container-89">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-16 ${iconClassName11}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-88">
                              <div className="button-container-90">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-17 ${iconClassName12}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-89">
                              <div className="button-container-91">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-18 ${iconClassName13}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-90">
                              <div className="button-container-92">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-19 ${iconClassName14}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                            <div className="flyout-cells-91">
                              <div className="button-container-93">
                                <div className="text-icon">
                                  <div className="link-wrapper">
                                    <div className="link">Menu destination link</div>
                                  </div>
                                  <img
                                    className={`icon-20 ${iconClassName15}`}
                                    alt="Icon"
                                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/icon-263.svg"
                                  />
                                </div>
                                <Divider className="divider-instance" color="light-grey" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="spacer" />
                      <div className="line-bottom" />
                    </>
                  )}
                </div>
              </div>
              <div className="bottommodal" />
            </>
          )}
        </div>
      )}
    </div>
  );
};

ScreenAndWrapper.propTypes = {
  adminItem: PropTypes.bool,
  item2: PropTypes.bool,
  item3: PropTypes.bool,
  item4: PropTypes.bool,
  item5: PropTypes.bool,
  item6: PropTypes.bool,
  item9: PropTypes.bool,
  item1: PropTypes.bool,
  item7: PropTypes.bool,
  item8: PropTypes.bool,
  screen: PropTypes.oneOf([
    "seven-hundred-and-fifty-six-px-and-1007px",
    "five-hundred-and-four-px-and-below",
    "one-thousand-and-eight-px-and-above",
    "seven-hundred-and-fifty-five-px-and-505px",
  ]),
  flyOut: PropTypes.bool,
  truncateActive: PropTypes.bool,
  localNavigationText: PropTypes.string,
  hasRightContainer: PropTypes.bool,
  icon: PropTypes.string,
  img: PropTypes.string,
  icon1: PropTypes.string,
  icon2: PropTypes.string,
  icon3: PropTypes.string,
  icon4: PropTypes.string,
  icon5: PropTypes.string,
  icon6: PropTypes.string,
  icon7: PropTypes.string,
  icon8: PropTypes.string,
  icon9: PropTypes.string,
  icon10: PropTypes.string,
  icon11: PropTypes.string,
  icon12: PropTypes.string,
  icon13: PropTypes.string,
  icon14: PropTypes.string,
  icon15: PropTypes.string,
  icon16: PropTypes.string,
  icon17: PropTypes.string,
};
