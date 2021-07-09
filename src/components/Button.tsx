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

const Button = ({
  children,
  onClick,
  style,
  disabled,
  type,
  className,
}: ButtonProps) => {
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
  disabled: false,
  type: "button",
};

export default Button;
