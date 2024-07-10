import { useState } from "react";
import accordionData from "./accordion-data";
import "./accordion.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = () => {
  const [singleSelection, setSingleSelection] = useState(true);
  const [multiSelection, setMultiSelection] = useState(false);

  const [itemId, setItemId] = useState([]);

  const handleEnableBtn = () => {
    setItemId([]);
    setSingleSelection((prev) => !prev);
    setMultiSelection((prev) => !prev);
  };

  const handleExpand = (id) => {
    if (singleSelection) {
      setItemId([id]);
    } else if (multiSelection) {
      setItemId((prev) => [...prev, id]);
    }
  };

  const handleShrink = (id) => {
    if (singleSelection) {
      setItemId([]);
    } else if (multiSelection) {
      setItemId((prev) => prev.filter((prevVal) => prevVal !== id));
    }
  };

  return (
    <div id="accordion-main">
      <p className="enable-btn" onClick={handleEnableBtn}>
        {!multiSelection ? "Enable" : "Disable"} Multi Selection
      </p>
      <ul className="accordion-list">
        {accordionData.map((data) => (
          <li className="accordion-item" key={data.id}>
            <div>
              <h2>{data.question}</h2>
              {!itemId.includes(data.id) && (
                <p onClick={() => handleExpand(data.id)}>
                  <FaPlus />
                </p>
              )}
              {itemId.includes(data.id) && (
                <p onClick={() => handleShrink(data.id)}>
                  <FaMinus />
                </p>
              )}
            </div>
            {itemId.includes(data.id) && (
              <p className="answer">{data.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
