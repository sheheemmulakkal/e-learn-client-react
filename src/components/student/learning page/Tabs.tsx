import React, { useState, ReactNode } from "react";

interface TabsProps {
  children: ReactNode[];
}

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(
    (children[0] as React.ReactElement<TabProps>).props.label
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="container mx-auto">
      <div className="flex border-b border-gray-300">
        {React.Children.map(children, (child) => {
          if (React.isValidElement<TabProps>(child)) {
            return (
              <button
                key={child.props.label}
                className={`${
                  activeTab === child.props.label
                    ? "border-b-2 border-purple-500"
                    : ""
                } flex-1 text-gray-700 font-medium py-2`}
                onClick={(e) => handleClick(e, child.props.label)}
              >
                {child.props.label}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div className="py-4">
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement<TabProps>(child) &&
            child.props.label === activeTab
          ) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <div className="hidden" data-label={label}>
      {children}
    </div>
  );
};

export { Tabs, Tab };
