import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rounded?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "dashboard";
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
        return "text-white border-b-2 border-white border-opacity-50 focus:border-opacity-100";
      case "secondary":
        return "text-black border-2 border-purple";
      case "tertiary":
        return "border-gray-200 border-2 ";
      case "dashboard":
        return "text-black border-2 border-black";
      default:
        return "";
    }
  };

  return (
    <div
      className={`flex flex-row ${
        rounded && "rounded-md"
      } relative ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <input
        className={`outline-none px-3 py-2 flex-auto bg-transparent w-full text-sm ${getTextFieldConfig()}   ${
          textCenter ? "text-center" : "text-left"
        } ${type === "date" && "date pl-8"}`}
        type={type}
        {...rest}
      />
      {type === "password" && (
        <button className="ml-2 absolute right-0 bottom-2" onClick={() => showPassword(!passwordShown)}>
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
