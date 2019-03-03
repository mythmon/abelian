import React from "react";
import cx from "classnames";

const Emoji = ({ label, className, symbol }) => (
  <span
    className={cx("emoji", className)}
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);

export default Emoji;
