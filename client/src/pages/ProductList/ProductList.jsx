import React from "react";
import ProductTopList from "../../components/MainProductsList/ProductTopList";
import Sidebar from "../../components/MainProductsList/Sidebar";

const ProductList = () => {
  return (
    <div>
      <div className="sm:px-15 md:px-[40px] sm:bg-[#f7fafc] lg:px-[50px] sm:pt-[15px] pt-3">
        <ProductTopList />
      </div>
      <div className="sm:px-15 md:px-[40px] sm:bg-[#f7fafc] lg:px-[50px] sm:py-[20px] pt-3">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-[240px] shrink-0 sticky scrollbar-hide top-[100px] h-[calc(100vh-100px)] overflow-y-auto">
            <Sidebar />
          </aside>

          {/* Main content scrolls while sidebar sticks */}
          <main className="flex-1">{/* Product list */}</main>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
