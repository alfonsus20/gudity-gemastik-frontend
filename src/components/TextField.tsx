import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rounded?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  textCenter?: boolean;
}

const TextField = ({
  icon,
  rounded,
  variant,
  textCenter,
  type,
  className,
  ...rest
}: InputProps) => {
  const [passwordShown, showPassword] = React.useState<boolean>(false);

  const getTextFieldConfig = (): string => {
    switch (variant) {
      case "primary":
        return "text-white border-b-2 border-white border-opacity-70 mb-4";
      case "secondary":
        return "text-black border-2 border-purple mb-4";
      case "tertiary":
        return "border-gray-200 border-2 ";
      default:
        return "";
    }
  };

  return (
    <div
      className={`flex flex-row px-3 py-2 ${
        rounded && "rounded-md"
      } relative ${getTextFieldConfig()} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <input
        className={`outline-none flex-auto bg-transparent w-full text-sm ${
          textCenter ? "text-center" : "text-left"
        } ${type === "date" && "date pl-8"}`}
        type={type}
        {...rest}
      />
      {type === "password" && (
        <button className="ml-2" onClick={() => showPassword(!passwordShown)}>
          {passwordShown ? (
            <EyeOffIcon className="h-6 w-6" />
          ) : (
            <EyeIcon className="h-6 w-6" />
          )}
        </button>
      )}
    </div>
  );
};

TextField.defaultProps = {
  variant: "primary",
  rounded: false,
};

export default TextField;
