import React from "react";
import PropTypes from "prop-types";

const shapes = { CircleBorder13: "rounded-radius13" };
const variants = { FillWhiteA700: "bg-white_A700" };
const sizes = { sm: "sm:p-[3px] md:p-[4px] p-[7px]" };

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
  shape: PropTypes.oneOf(["CircleBorder13"]),
  variant: PropTypes.oneOf(["FillWhiteA700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder13",
  variant: "FillWhiteA700",
  size: "sm",
};

export { Button };
