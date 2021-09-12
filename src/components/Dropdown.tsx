import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";

type DropdownOption = {
  value: any;
  label: string;
};

type DropdownProps = {
  options: DropdownOption[];
  className?: string;
  rounded?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
  defaultValue?: DropdownOption;
  handleChange?: Dispatch<SetStateAction<any>>;
};

const Dropdown = ({
  options,
  className,
  rounded,
  placeholder,
  icon,
  handleChange,
  defaultValue,
}: DropdownProps) => {
  const customStyles = {
    option: (provided: object) => ({
      ...provided,
      border: "none",
    }),
    control: (base: any, state: any) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
    }),
    valueContainer: (provided: object) => ({
      ...provided,
      overflow: "visible",
    }),
  };

  return (
    <div
      className={`${className} ${
        rounded && "rounded-md"
      } flex flex-row items-center`}
    >
      {icon && icon}
      <Select
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        isSearchable={false}
        className="flex-1"
        defaultValue={defaultValue}
        onChange={(e: any) => {
          if (handleChange) {
            handleChange(e.value);
          } else {
            console.log(e);
          }
        }}
      />
    </div>
  );
};

export default Dropdown;
