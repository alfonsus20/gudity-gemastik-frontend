import React from "react";

type TabState = {
  title: string;
  content: React.ReactNode;
};

type TabProps = {
  tabs: TabState[];
  className?: string;
  openTabIndex?: number;
};

const Tab = ({ tabs, className, openTabIndex }: TabProps) => {
  const [currentTab, setCurrentTab] = React.useState<TabState>(
    tabs[openTabIndex || 0]
  );

  return (
    <div className={className}>
      <div
        className={`grid ${
          tabs.length === 1
            ? "grid-cols-1"
            : tabs.length === 2
            ? "grid-cols-2"
            : "grid-cols-3"
        }  mb-4`}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setCurrentTab(tab)}
            className={`${
              tab.title === currentTab.title
                ? "border-b-4 border-blue-primary text-blue-primary font-medium"
                : "border-b-4 border-gray border-opacity-20"
            } p-2 text-sm sm:text-md md:text-lg`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="pb-6">{currentTab.content}</div>
    </div>
  );
};

Tab.defaultProps = {
  openTabIndex: 0,
};

export default Tab;
