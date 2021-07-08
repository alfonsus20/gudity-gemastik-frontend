import React from "react";

type UnderlineProps = {
  height?: number;
  width?: number;
  backgroundColor: string;
  center?: boolean;
};

const Underline = ({
  height,
  width,
  backgroundColor,
  center,
}: UnderlineProps) => {
  return (
    <div
      style={{ height, width, backgroundColor }}
      className={`${center && "mx-auto"}`}
    ></div>
  );
};

Underline.defaultProps = {
    height : 2,
    width : 60,
    center : false,
}

export default Underline;
