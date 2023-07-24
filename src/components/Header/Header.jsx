/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Header = ({
  borderTop = true,
  borderLeft,
  heading = true,
  borderBottom = true,
  text = "Heading",
  borderRight = true,
  sortControls,
  size,
  type,
  className,
  borderRightClassName,
  borderTopClassName,
  borderBottomClassName,
}) => {
  return (
    <div className={`header type-${type} ${size} ${className}`}>
      <div className="contents">
        {["checkbox", "radio-button"].includes(type) && (
          <div className="radio-button-2">{type === "radio-button" && <div className="selected-2" />}</div>
        )}

        <div className="inner-content">
          {size === "fifty-six-px-fixed" && (
            <>
              <>
                {heading && (
                  <div className="label-5">
                    {["checkbox", "radio-button"].includes(type) && <>Label</>}

                    {type === "text" && <>{text}</>}
                  </div>
                )}
              </>
            </>
          )}

          {size === "forty-two-px-flex" && <div className="heading">{text}</div>}
        </div>
      </div>
      {borderRight && <div className={`border-right ${borderRightClassName}`} />}

      {borderTop && <div className={`border-top ${borderTopClassName}`} />}

      {borderBottom && <div className={`border-bottom ${borderBottomClassName}`} />}
    </div>
  );
};

Header.propTypes = {
  borderTop: PropTypes.bool,
  borderLeft: PropTypes.bool,
  heading: PropTypes.bool,
  borderBottom: PropTypes.bool,
  text: PropTypes.string,
  borderRight: PropTypes.bool,
  sortControls: PropTypes.bool,
  size: PropTypes.oneOf(["forty-two-px-flex", "fifty-six-px-fixed"]),
  type: PropTypes.oneOf(["text", "checkbox", "radio-button"]),
};
