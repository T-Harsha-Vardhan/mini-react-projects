/* eslint-disable react/prop-types */
import { useState } from "react";
import "./image-slider.css";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSlider = ({ limit = 5, page = 1 }) => {
  const [images, setImages] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      const data = await res.json();
      setImages(data);
    };

    fetchImages();
  }, [limit, page]);

  const handleLeft = () => {
    if (imageIndex >= 1) {
      setImageIndex((prev) => prev - 1);
    }
  };
  const handleRight = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex((prev) => prev + 1);
    }
  };
  const handleDot = (idx) => {
    setImageIndex(idx);
  };

  return (
    <div id="image-slider">
      <div className="wrapper">
        <FaArrowLeft className="left-arrow" onClick={handleLeft} />
        <img src={images && images[imageIndex]?.download_url} alt="" />
        <FaArrowRight className="right-arrow" onClick={handleRight} />
        <div className="dots">
          {images?.map((_, idx) => (
            <>
              <div
                className={imageIndex === idx ? "dot dot-active" : "dot"}
                key={idx}
                onClick={() => handleDot(idx)}
              ></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
