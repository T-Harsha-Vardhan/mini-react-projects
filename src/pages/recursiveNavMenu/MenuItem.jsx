import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import MenuList from "./MenuList";

/* eslint-disable react/prop-types */
const MenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={handleToggle}>
            {isExpanded ? <FaMinus size={25} /> : <FaPlus size={25} />}
          </span>
        ) : null}
      </div>

      {isExpanded && item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
