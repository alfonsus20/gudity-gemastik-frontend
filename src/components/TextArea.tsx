import React from "react";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ReactNode;
  rounded?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "dashboard";
  textCenter?: boolean;
}

const TextArea = ({
  icon,
  rounded,
  variant,
  textCenter,
  className,
  ...rest
}: InputProps) => {
  const getTextAreaConfig = (): string => {
    switch (variant) {
      case "primary":
        return "text-white border-b-2 border-white border-opacity-70 mb-4";
      case "secondary":
        return "text-black border-2 border-purple mb-4";
      case "tertiary":
        return "border-gray-200 border-2 ";
      case "dashboard":
        return "text-black border-2 border-black";
      default:
        return "";
    }
  };

  return (
    <textarea
      className={`outline-none flex-auto bg-transparent w-full text-sm ${
        textCenter ? "text-center" : "text-left"
      } flex-row px-3 py-2 resize-none h-40 ${
        rounded && "rounded-md"
      } relative ${getTextAreaConfig()} ${className}`}
      {...rest}
    ></textarea>
  );
};

TextArea.defaultProps = {
  variant: "primary",
  rounded: false,
};

export default TextArea;
