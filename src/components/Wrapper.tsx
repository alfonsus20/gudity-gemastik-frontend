import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="flex flex-col slg:flex-row  max-w-screen-xl mx-auto md:px-8 pt-0 pb-12 md:py-12">{children}</div>;
};

const WrapperLeft = ({ children }: WrapperProps) => {
  return <div className="md:mr-8 flex-auto">{children}</div>;
};

const WrapperRight = ({ children }: WrapperProps) => {
  return <div style={{ flex: "0 1 auto" }} className='slg:w-80'>{children}</div>;
};

Wrapper.Left = WrapperLeft;
Wrapper.Right = WrapperRight;

export default Wrapper;
