import React from "react";

const RecommendedCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-white p-2 sm:p-4 border border-gray-200 rounded shadow hover:shadow-lg transition-shadow duration-300 max-w-[220px] w-full mx-auto"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 sm:h-48 object-contain mb-4 rounded"
      />

      <p className="text-gray-800 font-bold mb-2">
        ${product.price.toFixed(2)}
      </p>
      <p className="text-gray-600 text-[13px]">{product.description}</p>
    </div>
  );
};

export default RecommendedCard;
