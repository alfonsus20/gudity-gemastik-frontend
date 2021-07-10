import React from "react";

type TabState = {
  title: string;
  content: React.ReactNode;
};

type TabProps = {
  tabs: TabState[];
  className?: string;
};

const Tab = ({ tabs, className }: TabProps) => {
  const [currentTab, setCurrentTab] = React.useState<TabState>(tabs[0]);

  return (
    <div className={className}>
      <div
        className={`grid ${
          tabs.length === 1
            ? "grid-cols-1"
            : tabs.length === 2
            ? "grid-cols-2"
            : "grid-cols-3"
        }  border-t-2 border-gray border-opacity-20 mb-4`}
      >
        {tabs.map((tab) => (
          <button
            onClick={() => setCurrentTab(tab)}
            className={`${
              tab.title === currentTab.title
                ? "border-b-4 border-blue-primary text-blue-primary font-medium"
                : "border-b-2 border-gray border-opacity-20"
            } py-2`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>{currentTab.content}</div>
    </div>
  );
};

export default Tab;
