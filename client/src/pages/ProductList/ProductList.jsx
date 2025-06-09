import React, { useState } from "react";
import ProductTopList from "../../components/MainProductsList/ProductTopList";
import Sidebar from "../../components/MainProductsList/Sidebar";
import MainProductLeftTop from "../../components/MainProductsList/MainProductLeftTop";
import ProductFlexList from "../../components/MainProductsList/ProductFlexList";
import Pagination from "../../components/Paginantion";
import { UseContext } from "../../Context/EcommerceContext";
import ProductGridLayout from "../../components/MainProductsList/ProductGridLayout";

const ProductList = () => {
  // const [isGrid, setIsGrid] = useState(false);
  const [totalProductsToShow, setTotalProductsToShow] = useState(6);
  const [showFeatured, setShowFeatured] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const { isGridView } = UseContext();
  const items = [
    {
      id: 1,
      label: 6,
    },
    {
      id: 1,
      label: 12,
    },
  ];
  return (
    <div>
      <div className="sm:px-15 md:px-[40px] sm:bg-[#f7fafc] lg:px-[50px] sm:pt-[15px] pt-3">
        <ProductTopList />
      </div>
      <div className="sm:px-15 md:px-[40px] sm:bg-[#f7fafc] lg:px-[50px] sm:py-[20px] pt-3">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-[240px] shrink-0  scrollbar-hide top-[100px]  overflow-y-auto">
            <Sidebar />
          </aside>

          {/* Main content scrolls while sidebar sticks */}
          <main className="flex-1">
            <div>
              <MainProductLeftTop />
            </div>
            <div>
              {isGridView ? (
                <>
                  <div>products</div>
                  <ProductGridLayout
                    totalProductsToShow={totalProductsToShow}
                    activePage={activePage}
                    setActivePage={setActivePage}
                  />
                </>
              ) : (
                <ProductFlexList
                  totalProductsToShow={totalProductsToShow}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              )}
            </div>
            <div>
              <div className="flex justify-end items-center mt-4 gap-2">
                <div
                  className="relative"
                  onClick={() => {
                    setShowFeatured(!showFeatured);
                  }}
                >
                  <div className="p-2 border-1 hover:cursor-pointer flex rounded-lg items-center justify-between  border-[#DEE2E7] w-[100px] ">
                    Show {totalProductsToShow}
                    <img src="/assets/angleDown.png" />
                  </div>
                  {showFeatured && (
                    <div className="absolute top-full left-0 bg-white border-1 border-[#DEE2E7] rounded-lg shadow-lg mt-2 w-full z-10">
                      <ul className="p-2">
                        {items.map((item) => (
                          <li
                            key={item.id}
                            className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setShowFeatured(false);
                              setTotalProductsToShow((prev) =>
                                prev === 6 ? 12 : 6,
                              );
                            }}
                          >
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Pagination
                  totalPages={3}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
