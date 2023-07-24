/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonIconButton } from "../ButtonIconButton";
import { DdsFormStyle } from "../DdsFormStyle";
import { ElementWebIconsClose } from "../ElementWebIconsClose";
import { LeadingIcon } from "../LeadingIcon";
import { SearchButton } from "../SearchButton";
import { WebIconsSearch } from "../WebIconsSearch";
import "./style.css";

export const SearchInput = ({
  optionalHint = true,
  scrollbar,
  preferredHint = true,
  button = true,
  label = true,
  complete,
  state,
  device,
  className,
  DDSFormStyleDdsFormStyleClassName,
  leadingIconWebIconsSearchUnion = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-110.svg",
  text = "Hint text (optional)",
  override = (
    <WebIconsSearch union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-108.svg" />
  ),
  searchButtonButtonIconButtonState,
  searchButtonUsage = "global-1",
}) => {
  return (
    <div className={`search-input device-0-${device} ${className}`}>
      <div className="field-11">
        {label && <div className={`label-17 state-27-${state}`}>Label. Delete as necessary</div>}

        {preferredHint && <p className="hint-2">Hint text (preferred). Delete as necessary</p>}

        <div className="field-12">
          <div className={`contents-2 state-28-${state}`}>
            {state === "default" && <DdsFormStyle className={DDSFormStyleDdsFormStyleClassName} />}

            {state === "active" && device === "desktop" && (
              <div className="divider-container">
                <div className="divider-2" />
              </div>
            )}

            {["active", "disabled", "error-focus", "error", "focus"].includes(state) && (
              <div className={`DDS-form-style-focus-2 state-29-${state} device-1-${device} complete-0-${complete}`}>
                {["active", "error-focus", "focus"].includes(state) && <div className="field-13" />}
              </div>
            )}

            <div className={`input-field-2 state-31-${state} device-3-${device} complete-2-${complete}`}>
              <div className="left-2">
                <LeadingIcon
                  chooseIcon="search"
                  className="instance-node-5"
                  webIconsSearchUnion={
                    (!complete && device === "desktop" && state === "focus") ||
                    (!complete && device === "mobile" && state === "active") ||
                    (!complete && state === "default") ||
                    state === "disabled"
                      ? leadingIconWebIconsSearchUnion
                      : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-110.svg"
                  }
                />
                {((complete && device === "mobile" && state === "default") ||
                  device === "desktop" ||
                  (device === "mobile" && state === "active") ||
                  (device === "mobile" && state === "disabled") ||
                  (device === "mobile" && state === "error-focus") ||
                  (device === "mobile" && state === "error") ||
                  (device === "mobile" && state === "focus")) && (
                  <div className="type-2">
                    {!complete && ["active", "focus"].includes(state) && <div className="indicator-2" />}

                    {!complete && (
                      <>
                        <>{optionalHint && <div className="input">{text}</div>}</>
                      </>
                    )}

                    {complete && <div className="input-2">Search input</div>}

                    {complete && ["active", "error-focus", "focus"].includes(state) && <div className="indicator-3" />}
                  </div>
                )}

                {state === "default" && !complete && device === "mobile" && (
                  <>
                    <>
                      {optionalHint && (
                        <div className="type-2">{optionalHint && <div className="input">{text}</div>}</div>
                      )}
                    </>
                  </>
                )}
              </div>
              {((complete && state === "active") ||
                (complete && state === "default") ||
                (complete && state === "error-focus") ||
                (complete && state === "error") ||
                (complete && state === "focus")) && (
                <ButtonIconButton
                  buttonNoText={
                    <ElementWebIconsClose union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-109.svg" />
                  }
                  className="instance-node-5"
                  onDark={false}
                  size="twenty-four-px"
                  state="active"
                  style="link"
                />
              )}
            </div>
            {complete && state === "active" && device === "desktop" && (
              <div className="search-content">
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="contents-wrapper">
                  <div className="search-result-i-wrapper">
                    <div className="search-result-i">
                      <span className="text-wrapper-6">Search</span>
                      <span className="text-wrapper-7"> result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results-2">
                  <div className="title-wrapper">
                    <div className="title-i">Related searches</div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
                <div className="results">
                  <div className="search-result-wrapper">
                    <div className="search-result">
                      <span className="span">Search </span>
                      <span className="text-wrapper-5">result link</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {button && (
            <SearchButton
              buttonIconButtonButtonPxNoText={
                state === "error-focus" ||
                state === "error" ||
                (complete && device === "mobile" && state === "active") ? (
                  <WebIconsSearch union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-108.svg" />
                ) : undefined
              }
              buttonIconButtonState={
                (!complete && device === "mobile" && state === "active") ||
                (device === "desktop" && state === "active") ||
                state === "default" ||
                state === "disabled" ||
                state === "focus"
                  ? searchButtonButtonIconButtonState
                  : (!complete && device === "desktop" && state === "error-focus") ||
                    (!complete && device === "desktop" && state === "error") ||
                    (complete && device === "mobile" && state === "active") ||
                    (complete && state === "error-focus") ||
                    (complete && state === "error")
                  ? "active"
                  : undefined
              }
              className="instance-node-5"
              usage={
                state === "error-focus" || state === "error" || (complete && device === "mobile" && state === "active")
                  ? "global-1"
                  : searchButtonUsage
              }
            />
          )}
        </div>
        {(state === "error-focus" || state === "error" || (complete && device === "mobile" && state === "active")) && (
          <div className={`mobile-2 state-0-${state}`}>
            {state === "active" && (
              <>
                <div className="divider-wrapper">
                  <div className="divider-2" />
                </div>
                <div className="search-content-2">
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="contents-wrapper">
                    <div className="search-result-i-wrapper">
                      <div className="search-result-i">
                        <span className="text-wrapper-6">Search</span>
                        <span className="text-wrapper-7"> result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results-2">
                    <div className="title-wrapper">
                      <div className="title-i">Related searches</div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                  <div className="results">
                    <div className="search-result-wrapper">
                      <div className="search-result">
                        <span className="span">Search </span>
                        <span className="text-wrapper-5">result link</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {["error-focus", "error"].includes(state) && (
              <p className="error-text-2">Error text. Delete as necessary</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  optionalHint: PropTypes.bool,
  scrollbar: PropTypes.bool,
  preferredHint: PropTypes.bool,
  button: PropTypes.bool,
  label: PropTypes.bool,
  complete: PropTypes.bool,
  state: PropTypes.oneOf(["active", "default", "focus", "error-focus", "error", "disabled"]),
  device: PropTypes.oneOf(["desktop", "mobile"]),
  leadingIconWebIconsSearchUnion: PropTypes.string,
  text: PropTypes.string,
  searchButtonButtonIconButtonState: PropTypes.string,
  searchButtonUsage: PropTypes.string,
};
