import React from "react";
import Select from "react-select";
import { CollectionIcon } from "@heroicons/react/solid";

type DropdownOption = {
  value: any;
  label: string;
};

type DropdownProps = {
  id?: string;
  name: string;
  options: DropdownOption[];
  className?: string;
  rounded?: boolean;
};

const Dropdown = ({ id, name, options, className, rounded }: DropdownProps) => {
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
  };

  return (
    <div
      className={`${className} ${
        rounded && "rounded-md"
      } flex flex-row items-center`}
      style={{ paddingTop: 1, paddingBottom: 1 }}
    >
      <CollectionIcon className="w-6 h-6" />
      <Select
        options={options}
        styles={customStyles}
        placeholder="Bidang UMKM"
        isSearchable={false}
        className="flex-1"
      />
    </div>
  );
};

export default Dropdown;
