import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="flex flex-row  max-w-screen-xl mx-auto px-8 py-12">{children}</div>;
};

const WrapperLeft = ({ children }: WrapperProps) => {
  return <div className="mr-8 flex-auto">{children}</div>;
};

const WrapperRight = ({ children }: WrapperProps) => {
  return <div style={{ flex: "0 0 20rem" }}>{children}</div>;
};

Wrapper.Left = WrapperLeft;
Wrapper.Right = WrapperRight;

export default Wrapper;
