import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "plain"
    | "plain-blue";
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
      case "plain-blue":
        return "text-blue-primary bg-transparent font-medium";
      default:
        return "";
    }
  };

  const getButtonSize = (): string => {
    switch (size) {
      case "sm":
        return "px-2 py-1 w-auto text-xs";
      case "md":
        return "px-4 py-1 w-auto text-sm";
      case "lg":
        return "px-6 py-3 w-auto text-md";
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
        className={`flex flex-row justify-center items-center ${
          variant.includes("plain") ? "py-0" : "py-2 border-2"
        } ${getButtonConfiguration()} ${getButtonSize()} ${className}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      className={`flex flex-row justify-center items-center ${
        variant.includes("plain") ? "py-0" : "py-2 border-2"
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
