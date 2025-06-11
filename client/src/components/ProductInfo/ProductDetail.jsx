import React from "react";

const ProductDetail = ({ currentProduct }) => {
  if (!currentProduct) return <p>Loading...</p>;
  return (
    <div className="max-w-md mx-auto p-4  bg-white">
      <div className="flex items-center gap-1">
        <img src="/assets/greenTick.png" className="w-[18px] h-[14px]" />
        <p className="text-green-600  text-[16px] mb-1">In stock</p>
      </div>
      <h2 className="text-lg font-semibold mb-2">{currentProduct?.title}</h2>
      <div className="flex items-center text-sm text-gray-600 space-x-2 mb-3">
        <div className="text-orange-500  text-xl ">
          ★★★★<span className="text-[#D4CDC5] ">★</span> 9.3
        </div>
        <span className="text-[#D4CDC5] text-xl">•</span>
        <div className="flex items-center gap-2">
          <img
            src="/assets/review.png"
            alt="review "
            className="w-[18px] h-[18px]"
          />
          <span className="text-[#787A80] text-[16px]"> 32 reviews</span>
        </div>
        <span className="text-[#D4CDC5] text-xl">•</span>
        <div className="flex items-center gap-2">
          <img
            src="/assets/bucket.png"
            alt="review "
            className="w-[18px] h-[18px]"
          />
          <span className="text-[#787A80] text-[16px]">154 sold</span>
        </div>
      </div>

      <div className="grid grid-cols-3  bg-[#FFF0DF] p-2 rounded mb-4">
        <div className="border-r-2 border-[#DEE2E7] pl-2 ">
          <p className="text-red-600 font-bold">$98.00</p>
          <p className="text-xs text-gray-500">50-100 pcs</p>
        </div>
        <div className="border-r-2 border-[#DEE2E7] pl-2 ">
          <p className="font-semibold">$90.00</p>
          <p className="text-xs text-gray-500">100-700 pcs</p>
        </div>
        <div className="pl-2">
          <p className="font-semibold">$78.00</p>
          <p className="text-xs text-gray-500">700+ pcs</p>
        </div>
      </div>

      <div className="text-sm text-gray-700 space-y-2">
        <div className="flex border-b border-[#DEE2E7] pb-4 mb-2">
          <p className="text-[16px] text-[#8B96A5] min-w-[120px]">Price:</p>
          <p className="text-[16px] text-[#505050]">Negotiable</p>
        </div>

        <div className="border-b border-[#DEE2E7] pb-4 mb-2">
          <div className="flex mb-2">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">Type:</p>
            <p className="text-[16px] text-[#505050]">Classic shoes</p>
          </div>
          <div className="flex mb-2">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">
              Material:
            </p>
            <p className="text-[16px] text-[#505050]">Plastic material</p>
          </div>
          <div className="flex">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">Design:</p>
            <p className="text-[16px] text-[#505050]">Modern nice</p>
          </div>
        </div>

        <div>
          <div className="flex mb-2">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">
              Customization:
            </p>
            <p className="text-[16px] text-[#505050]">
              Customized logo and design custom packages
            </p>
          </div>
          <div className="flex mb-2">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">
              Protection:
            </p>
            <p className="text-[16px] text-[#505050]">Refund Policy</p>
          </div>
          <div className="flex">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">
              Warranty:
            </p>
            <p className="text-[16px] text-[#505050]">2 years full warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
