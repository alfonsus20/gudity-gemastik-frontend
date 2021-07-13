import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  variant: "primary" | "secondary" | "tertiary" | "quaternary" | "plain";
  rounded?: boolean;
  pathName?: string;
}

const Button = ({
  text,
  icon,
  variant,
  size,
  pathName,
  className,
  ...rest
}: ButtonProps) => {
  const getButtonConfiguration = (): string => {
    switch (variant) {
      case "primary":
        return "text-white bg-blue-primary border-blue-primary";
      case "secondary":
        return "text-blue-primary bg-transparent border-blue-primary";
      case "tertiary":
        return "text-black bg-transparent border-black";
      case "quaternary":
        return "text-white bg-transparent border-blue-primary";
      default:
        return "";
    }
  };

  const getButtonSize = (): string => {
    switch (size) {
      case "sm":
        return "px-2 w-auto text-xs";
      case "md":
        return "px-4 w-auto text-sm";
      case "lg":
        return "px-6 w-auto text-lg";
      case "full":
        return "w-full text-md";
      default:
        return "";
    }
  };

  if (pathName) {
    return (
      <Link
        to={`/${pathName}`}
        className={`py-2 flex flex-row justify-center items-center ${
          variant === "plain" ? "" : "border-2"
        } ${getButtonConfiguration()} ${getButtonSize()}`}
      >
        {icon && <>{icon} &nbsp;</>}
        {text}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      className={`py-2 flex flex-row justify-center items-center ${
        variant === "plain" ? "" : "border-2"
      } ${getButtonConfiguration()} ${getButtonSize()} ${className}`}
    >
      {icon && <>{icon} &nbsp;</>}
      {text}
    </button>
  );
};

Button.defaultProps = {
  size: "md",
};

export default Button;
