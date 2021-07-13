import React from "react";
import Button from "./Button";

type SidebarItem = {
  left: string;
  right: any;
};

type SidebarProps = {
  title: string;
  items: SidebarItem[];
  total: number;
  buttonText?: string;
  buttonAction ?(): void;
};

const Sidebar = ({
  title,
  items,
  total,
  buttonText,
  buttonAction,
}: SidebarProps) => {
  return (
    <aside className="shadow px-6 py-4 text-sm md:sticky top-24">
      <div className="py-4">{title}</div>
      <div className="py-3 border-b-2 border-t-2 border-gray-300">
        {items.map((item, i) => (
          <div className="flex flex-row justify-between" key={i}>
            <span>{item.left}</span>
            <span>{item.right}</span>
          </div>
        ))}
      </div>
      <div className="py-4 flex flex-row justify-between text-medium font-semibold ">
        <span>Total</span>
        <span className="text-blue-primary">Rp {total}</span>
      </div>
      {buttonText && buttonAction && (
        <div className="">
          <Button
            text={buttonText}
            onClick={buttonAction}
            size="full"
            variant="primary"
          />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
