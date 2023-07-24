/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonIconButton } from "../ButtonIconButton";
import { WebIconsBasket } from "../WebIconsBasket";
import "./style.css";

export const GlobalHeaderElementsBasket = ({
  items = "0 items",
  total = "£94.60",
  state,
  className,
  buttonIconButtonButtonPxNoText = (
    <WebIconsBasket union="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/union-27.svg" />
  ),
}) => {
  return (
    <div className={`global-header-elements-basket ${state} ${className}`}>
      <div className="container-6">
        {state === "items-loading" && (
          <div className="loading-spinner-with">
            <div className="loading-spinner-icon-2">
              <div className="indicator-wrapper">
                <div className="img-wrapper">
                  <img
                    className="load-3"
                    alt="Load"
                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/load---25-.svg"
                  />
                </div>
              </div>
            </div>
            <div className="div-7">
              <div className="label-18">Adding</div>
            </div>
          </div>
        )}

        {["items-added", "no-items-added"].includes(state) && (
          <>
            <ButtonIconButton
              buttonPxNoText={buttonIconButtonButtonPxNoText}
              onDark={false}
              size="forty-px-default-size"
              state="active"
              style="primary"
            />
            <div className="div-7">
              {state === "items-added" && (
                <>
                  <div className="text-13">{total}</div>
                  <div className="guide-price">Guide price</div>
                </>
              )}

              {state === "no-items-added" && <div className="text-14">{items}</div>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

GlobalHeaderElementsBasket.propTypes = {
  items: PropTypes.string,
  total: PropTypes.string,
  state: PropTypes.oneOf(["items-added", "items-loading", "no-items-added"]),
};
