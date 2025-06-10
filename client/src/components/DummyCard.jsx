import React from "react";

const DummyCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-2 w-[160px] h-full min-w-[150px] sm:p-4 p-2 bg-white border border-[#DEE2E7] rounded-md mb-4 relative">
      {/* Image */}
      <div className="flex items-center w-full h-full justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-[150px] h-[160px] object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Title */}
      <div className="flex items-center gap-2 text-sm mt-1">
        <span className="text-[#1C1C1C] text-[20px] font-semibold">
          ${product.price}
        </span>
      </div>
      <h2 className="text-[16px] text-[#606060]  w-full truncate">
        {product.title}
      </h2>

      {/* Price */}
    </div>
  );
};

export default DummyCard;
