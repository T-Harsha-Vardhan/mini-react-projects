/* eslint-disable react/prop-types */
import { useState } from "react";
import "./star-rating.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div id="star-rating">
      <div className="stars">
        {[...Array(noOfStars)].map((_, index) => (
          <FaStar
            key={index + 1}
            className={index < (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index + 1)}
            onMouseMove={() => handleMouseEnter(index + 1)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        ))}
      </div>
      <p
        onClick={() => {
          setRating(0);
        }}
      >
        clear
      </p>
    </div>
  );
};

export default StarRating;
