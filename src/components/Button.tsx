import React from "react";

type ButtonProps = {
  children: React.ReactNode | string;
  backgroundColor?: string;
  onClick(): void;
  fontSize?: number;
  disabled?: boolean;
};

const Button = ({
  children,
  backgroundColor,
  onClick,
  fontSize,
  disabled,
}: ButtonProps) => {
  return (
    <button
      style={{ backgroundColor, fontSize }}
      onClick={onClick}
      className="px-4 py-2 flex flex-row"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: "#1854FF",
  fontSize: 16,
  disabled: false,
};

export default Button;
