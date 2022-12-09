import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[21px] md:text-[28px] text-[40px]",
  h2: "text-[18px]",
  h3: "text-[16px]",
  h4: "text-[14px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
