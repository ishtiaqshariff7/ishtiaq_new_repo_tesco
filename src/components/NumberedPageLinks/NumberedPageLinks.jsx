/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NumberedPageLinks = ({ state, text = "1", className }) => {
  return (
    <div className={`numbered-page-links state-21-${state} ${className}`}>
      <div className="text-10">
        {["default", "hover"].includes(state) && <>{text}</>}

        {state === "ellipses" && <>…</>}

        {state === "selected" && (
          <>
            <div className="text-11" />
            <div className="text-12">{text}</div>
          </>
        )}
      </div>
    </div>
  );
};

NumberedPageLinks.propTypes = {
  state: PropTypes.oneOf(["ellipses", "hover", "selected", "default"]),
  text: PropTypes.string,
};
