import React from "react";

type UnderlineProps = {
  height?: number;
  width?: number;
  backgroundColor?: string;
  center?: boolean;
  className ?: string;
};

const Underline = ({
  height,
  width,
  backgroundColor,
  center,
  className
}: UnderlineProps) => {
  return (
    <div
      style={{ height, width, backgroundColor }}
      className={`${center && "mx-auto"} ${className}`}
    ></div>
  );
};

Underline.defaultProps = {
  height: 2,
  width: 60,
  center: false,
  backgroundColor: "#1854FF",
};

export default Underline;
