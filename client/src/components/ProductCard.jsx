import { MdOutlineStar } from "react-icons/md";
const ProductCard = ({ product }) => {
  return (
    <div className="flex gap-4 p-4 bg-white border border-[#DEE2E7] rounded-md mb-4 ">
      <div className="w-[190px] h-[190px] bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-900">{product.title}</h2>
        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="text-[#1C1C1C] text-[20px] font-semibold">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="line-through text-[#8B96A5] text-[16px]">
              ${product.oldPrice}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm mt-1">
          {/* Star Ratings */}
          <div className="flex items-center gap-1 text-[#FF9017] text-[16px]">
            <span>★★★★★</span> {/* You can replace this with real star icons */}
            <span className="text-[#FF9017] text-[14px] font-medium">
              {product.rating}
            </span>
          </div>

          {/* Dot separator */}
          <span className="text-[#DEE2E7]">•</span>

          {/* Orders */}
          <span className="text-[#8B96A5] text-[14px]">
            {product.orders} orders
          </span>

          {/* Dot separator */}
          <span className="text-[#DEE2E7]">•</span>

          {/* Free Shipping */}
          <span className="text-[#00B517] text-[14px] font-medium">
            Free Shipping
          </span>
        </div>

        <p className="text-[16px] text-[#505050] mt-2">{product.description}</p>
        <button className="text-blue-600 text-[16px] font-semibold mt-2 hover:underline">
          View details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
