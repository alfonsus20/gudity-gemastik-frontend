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
    | "plain-blue"
    | "danger";
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
        return "text-white bg-blue-primary border-blue-primary hover:bg-opacity-90";
      case "secondary":
        return "text-blue-primary bg-transparent border-blue-primary hover:bg-blue-primary hover:text-white";
      case "tertiary":
        return "text-black bg-transparent border-black";
      case "quaternary":
        return "text-white bg-transparent border-blue-primary hover:bg-blue-primary ";
      case "plain-blue":
        return "text-blue-primary bg-transparent font-medium";
      case "danger":
        return "text-white bg-red-500 border-red-500 hover:bg-opacity-90";
      default:
        return "";
    }
  };

  const getButtonSize = (): string => {
    switch (size) {
      case "sm":
        return "px-2 py-1 text-xs";
      case "md":
        return "px-4 py-1 text-sm";
      case "lg":
        return "px-6 py-3 text-md";
      case "full":
        return "w-full text-md";
      default:
        return "";
    }
  };

  if (pathName) {
    return (
      <div className='flex'>
        <Link
          to={`/${pathName}`}
          className={`flex flex-row justify-center items-center transition ${
            variant.includes("plain") ? "py-0" : "py-2 border-2"
          } ${getButtonConfiguration()} ${getButtonSize()} ${className}`}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {text}
        </Link>
      </div>
    );
  }

  return (
    <button
      className={`flex flex-row justify-center items-center transition ${
        variant.includes("plain") ? "py-0" : "py-2 border-2"
      } ${getButtonConfiguration()} ${getButtonSize()} ${className}`}
      {...rest}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

Button.defaultProps = {
  size: "md",
};

export default Button;
