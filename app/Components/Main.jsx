"use client";
import React, { useState } from "react";
import Image from "next/image";

const Main = () => {
  const [images, setImages] = useState([
    "/dc.jpg",
    "/marvel1.jpg",
    "/marvel2.jpg",
    "/sherlock.jpg",
    "/sherlock2.jpg",
  ]);

  const heights = [150, 200, 300, 200, 150];

  const handleClick = (index) => {
    const clickedImage = images[index];
    const newImages = images.filter((_, i) => i !== index);
    newImages.splice(2, 0, clickedImage);
    setImages(newImages);
  };

  return (
    <div className="flex justify-center items-end gap-2 mt-5">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="overflow-hidden rounded-lg"
        >
          <Image
            src={image}
            width={heights[index]}  // Set width proportional to height
            height={heights[index]}
            style={{
              height: `${heights[index]}px`,
              width: `${heights[index]}px`,  
              objectFit: "cover",  
            }}
            className="rounded-md" 
          />
        </div>
      ))}
    </div>
  );
};

export default Main;
