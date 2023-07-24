/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TescoLogosTesco = ({
  type,
  typeBankNativeClassName,
  fill = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-1-1.svg",
  img = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-3-1.svg",
  text = "Signpost",
  fill1 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-1-2.svg",
  fill2 = "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-3-2.svg",
}) => {
  return (
    <>
      {(type === "bank-large" ||
        type === "bank-native" ||
        type === "bank-small" ||
        type === "large-signpost" ||
        type === "lotus-large" ||
        type === "lotus-small" ||
        type === "medium" ||
        type === "native" ||
        type === "small") && (
        <div className={`tesco-logos-tesco ${type} ${typeBankNativeClassName}`}>
          {["bank-large", "bank-native", "bank-small", "medium"].includes(type) && (
            <div className="tesco-bank">
              <img
                className="fill"
                alt="Fill"
                src={
                  type === "bank-native"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/chevrons-2@2x.png"
                    : type === "bank-small"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/chevrons-1@2x.png"
                    : type === "bank-large"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/chevrons@2x.png"
                    : fill1
                }
              />
              {["bank-large", "bank-native", "bank-small"].includes(type) && (
                <>
                  <div className="bank">
                    <img
                      className="k"
                      alt="K"
                      src={
                        type === "bank-small"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/k-1.svg"
                          : type === "bank-large"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/k.svg"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/k-2.svg"
                      }
                    />
                    <img
                      className="n"
                      alt="N"
                      src={
                        type === "bank-small"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/n-1.svg"
                          : type === "bank-large"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/n.svg"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/n-2.svg"
                      }
                    />
                    <img
                      className="a"
                      alt="A"
                      src={
                        type === "bank-small"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/a-1.svg"
                          : type === "bank-large"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/a.svg"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/a-2.svg"
                      }
                    />
                    <img
                      className="b"
                      alt="B"
                      src={
                        type === "bank-small"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/b-1.svg"
                          : type === "bank-large"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/b.svg"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/b-2.svg"
                      }
                    />
                  </div>
                  <div className="tesco">
                    <img
                      className="o"
                      alt="O"
                      src={
                        type === "bank-small"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/o-1.svg"
                          : type === "bank-large"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/o.svg"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/o-2.svg"
                      }
                    />
                    <img
                      className="c"
                      alt="C"
                      src={
                        type === "bank-small"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/c-1.svg"
                          : type === "bank-large"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/c.svg"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/c-2.svg"
                      }
                    />
                    <img
                      className="s"
                      alt="S"
                      src={
                        type === "bank-small"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/s-1.svg"
                          : type === "bank-large"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/s.svg"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/s-2.svg"
                      }
                    />
                    <img
                      className="e"
                      alt="E"
                      src={
                        type === "bank-small"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/e-1.svg"
                          : type === "bank-large"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/e.svg"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/e-2.svg"
                      }
                    />
                    <img
                      className="t"
                      alt="T"
                      src={
                        type === "bank-small"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/t-1.svg"
                          : type === "bank-large"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/t.svg"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/t-2.svg"
                      }
                    />
                  </div>
                </>
              )}

              {type === "medium" && (
                <>
                  <img className="img" alt="Fill" src={fill2} />
                  <img
                    className="group"
                    alt="Group"
                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-7-7@2x.png"
                  />
                  <img
                    className="group-2"
                    alt="Group"
                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-10-7@2x.png"
                  />
                  <img
                    className="group-3"
                    alt="Group"
                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-13-7@2x.png"
                  />
                  <img
                    className="group-4"
                    alt="Group"
                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-16-7@2x.png"
                  />
                  <img
                    className="group-5"
                    alt="Group"
                    src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-19-7@2x.png"
                  />
                </>
              )}
            </div>
          )}

          {["large-signpost", "lotus-large", "lotus-small"].includes(type) && (
            <>
              <div className="tesco_logo">
                {["large-signpost", "lotus-small"].includes(type) && (
                  <div className="tesco-logo">
                    <img
                      className="fill-2"
                      alt="Fill"
                      src={
                        type === "large-signpost"
                          ? fill
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-1-5.svg"
                      }
                    />
                    <img
                      className="fill-3"
                      alt="Fill"
                      src={
                        type === "large-signpost"
                          ? img
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-3-5.svg"
                      }
                    />
                    <img
                      className="group-6"
                      alt="Group"
                      src={
                        type === "large-signpost"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-7-7@2x.png"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-7-5@2x.png"
                      }
                    />
                    <img
                      className="group-7"
                      alt="Group"
                      src={
                        type === "large-signpost"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-10-7@2x.png"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-10-5@2x.png"
                      }
                    />
                    <img
                      className="group-8"
                      alt="Group"
                      src={
                        type === "large-signpost"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-13-1@2x.png"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-13-5@2x.png"
                      }
                    />
                    <img
                      className="group-9"
                      alt="Group"
                      src={
                        type === "large-signpost"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-16-1@2x.png"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-16-5@2x.png"
                      }
                    />
                    <img
                      className="group-10"
                      alt="Group"
                      src={
                        type === "large-signpost"
                          ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-19-7@2x.png"
                          : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-19-5@2x.png"
                      }
                    />
                  </div>
                )}
              </div>
              <div className="signpost">
                <div className="group-16">
                  {["lotus-large", "lotus-small"].includes(type) && (
                    <div className="overlap-group">
                      <img
                        className="fill-4"
                        alt="Fill"
                        src={
                          type === "lotus-large"
                            ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-6.svg"
                            : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-6-1.svg"
                        }
                      />
                      <img
                        className="fill-5"
                        alt="Fill"
                        src={
                          type === "lotus-large"
                            ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-8.svg"
                            : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-8-1.svg"
                        }
                      />
                    </div>
                  )}

                  {type === "large-signpost" && <>{text}</>}
                </div>
              </div>
            </>
          )}

          {["native", "small"].includes(type) && (
            <>
              <img
                className="fill-6"
                alt="Fill"
                src={
                  type === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-1-3.svg"
                    : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-1-4.svg"
                }
              />
              <img
                className="fill-7"
                alt="Fill"
                src={
                  type === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-3-3.svg"
                    : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/fill-3-4.svg"
                }
              />
              <img
                className="group-11"
                alt="Group"
                src={
                  type === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-7-3@2x.png"
                    : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-7-4@2x.png"
                }
              />
              <img
                className="group-12"
                alt="Group"
                src={
                  type === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-10-3@2x.png"
                    : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-10-4@2x.png"
                }
              />
              <img
                className="group-13"
                alt="Group"
                src={
                  type === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-13-3@2x.png"
                    : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-13-4@2x.png"
                }
              />
              <img
                className="group-14"
                alt="Group"
                src={
                  type === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-16-3@2x.png"
                    : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-16-4@2x.png"
                }
              />
              <img
                className="group-15"
                alt="Group"
                src={
                  type === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-19-3@2x.png"
                    : "https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/group-19-4@2x.png"
                }
              />
            </>
          )}
        </div>
      )}

      {type === "bank-x-small" && (
        <img
          className={`tesco-logos-tesco type-bank-x-small-2 ${typeBankNativeClassName}`}
          alt="Type bank x small"
          src="https://generation-sessions.s3.amazonaws.com/06351d3a8bbc7a8cde6cf3d9322c28e2/img/type-bank-x-small.svg"
        />
      )}
    </>
  );
};

TescoLogosTesco.propTypes = {
  type: PropTypes.oneOf([
    "native",
    "lotus-large",
    "lotus-small",
    "bank-native",
    "bank-large",
    "bank-x-small",
    "large-signpost",
    "small",
    "bank-small",
    "medium",
  ]),
  fill: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  fill1: PropTypes.string,
  fill2: PropTypes.string,
};
