import React from "react";

type InputProps = {
  type: string;
  icon?: React.ReactNode;
  placeholder?: string;
  value: any;
  onChange(): void;
};

const InputField = ({
  type,
  icon,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-row border-2 border-violet p-2 rounded-md relative">
      {icon && <span className="mr-2">{icon}</span>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`outline-none ${type === "date" && "date pl-8"} `}
      />
    </div>
  );
};

export default InputField;
