import React from "react";

type ButtonProps = {
  children: React.ReactNode | string;
  onClick(): void;
  fontSize?: number;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

const Button = ({ children, onClick, style, disabled, type, className }: ButtonProps) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`px-4 py-2 flex flex-row justify-center ${className}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: "#1854FF",
  fontSize: 16,
  disabled: false,
  border: "",
  type: "button",
};

export default Button;
