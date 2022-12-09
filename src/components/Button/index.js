import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder13: "rounded-radius13",
  icbCircleBorder21: "rounded-radius21",
};
const variants = {
  FillWhiteA700: "bg-white_A700",
  icbFillBlueA700: "bg-blue_A700",
  icbOutlineBlack9000c: "bg-white_A700 shadow-bs",
};
const sizes = {
  sm: "sm:p-[3px] md:p-[4px] p-[7px]",
  smIcn: "p-[12px] sm:p-[6px] md:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder13", "icbCircleBorder21"]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "icbFillBlueA700",
    "icbOutlineBlack9000c",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillWhiteA700",
  size: "sm",
};

export { Button };
