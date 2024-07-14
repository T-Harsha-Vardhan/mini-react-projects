import { useState } from "react";
import "./custom-tabs.css";

const tabsContent = [
  {
    label: "Tab 1",
    content: <div>This is content for Tab 1</div>,
  },
  {
    label: "Tab 2",
    content: <div>This is content for Tab 2</div>,
  },
  {
    label: "Tab 3",
    content: <div>This is content for Tab 3</div>,
  },
];
const CustomTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div id="custom-tabs">
      <div className="header">
        {tabsContent?.map((tabContent, idx) => (
          <h2
            key={idx}
            onClick={() => {
              setCurrentTab(idx);
            }}
          >
            {tabContent.label}
          </h2>
        ))}
      </div>
      <div className="content">
        <p>{tabsContent[currentTab] && tabsContent[currentTab].content}</p>
      </div>
    </div>
  );
};

export default CustomTabs;
