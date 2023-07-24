/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ItemCount = ({ className }) => {
  return (
    <div className={`item-count ${className}`}>
      <div className="text-wrapper-4">Showing</div>
      <div className="element-2">31-40</div>
      <div className="text-wrapper-4">of</div>
      <div className="element-3">50</div>
      <div className="text-wrapper-4">results</div>
    </div>
  );
};
