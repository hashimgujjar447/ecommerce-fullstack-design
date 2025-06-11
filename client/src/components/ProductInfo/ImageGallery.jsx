import React, { useState } from "react";

const ImageGallery = ({ currentProduct }) => {
  if (!currentProduct) return <p>Loading...</p>;
  const [currIndex, setCurrIndex] = React.useState(0);

  return (
    <div className="flex flex-col items-center ">
      <img
        src={currentProduct?.image?.[currIndex]}
        alt="product"
        className=" h-[300px] w-[300px] lg:w-[335px] lg:h-[335px] xl:w-[345px] xl:h-[345px] object-contain rounded-lg border-1 border-[#DEE2E7]"
      />
      <div className="flex gap-1 xl:gap-2  mt-2">
        {currentProduct?.image?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`product-thumbnail-${index}`}
            className={`w-8 h-8 lg:w-13 lg:h-13 xl:w-15 xl:h-15 object-contain cursor-pointer rounded-lg border-1 ${
              index === currIndex ? " border-[#505050]" : " border-[#DEE2E7]"
            }`}
            onClick={() => {
              // Logic to change the main image can be added here
              setCurrIndex(index);
              console.log("Image clicked:", img);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
