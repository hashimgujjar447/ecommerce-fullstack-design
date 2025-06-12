import React, { useEffect, useState } from "react";
import ImageGallery from "../../components/ProductInfo/ImageGallery";
import ProductDetail from "../../components/ProductInfo/ProductDetail";
import ProductSupplier from "../../components/ProductInfo/ProductSupplier";
import ProductTopList from "../../components/MainProductsList/ProductTopList";
import { useParams } from "react-router-dom";
import { UseContext } from "../../Context/EcommerceContext";
import ProductDescriptionShipping from "../../components/ProductInfo/ProductDescriptionShipping";
import DummyCard from "../../components/DummyCard";
import SimpleCard from "../../components/SimpleCard";

const ProductInfo = () => {
  const { products } = UseContext();
  const { id } = useParams();
  console.log(id);

  const [currentProduct, setCurrentProduct] = useState(null);
  console.log(products);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    if (products.length > 0) {
      const elem = products.find((prod) => prod.id === Number(id));
      if (!elem) console.warn("No product found with ID:", id);
      setCurrentProduct(elem);
    }
  }, [id, products]);

  useEffect(() => {
    console.log(currentProduct);
  }, [currentProduct]);

  return (
    <div className="sm:px-15 flex flex-col   md:px-[40px] sm:bg-[#f7fafc] lg:px-[50px] sm:pt-[15px] pt-3">
      <div>
        <ProductTopList />
      </div>
      <div className="flex justify-between py-5 px-2 xl:px-5 gap-2 mt-3 bg-white border-1 border-[#DEE2E7] ">
        <div>
          <ImageGallery currentProduct={currentProduct} />
        </div>
        <div>
          <ProductDetail currentProduct={currentProduct} />
        </div>
        <div className="flex-end">
          <ProductSupplier currentProduct={currentProduct} />
        </div>
      </div>
      <div className="flex justify-between gap-2 mt-3 mb-3  ">
        <div className="bg-white border-1 border-[#DEE2E7] lg:mix-w-xl xlg:min-w-3xl p-2">
          <ProductDescriptionShipping />
        </div>
        <div className="bg-white border-1 lg:inline-block hidden  flex flex-col border-[#DEE2E7]">
          <h2 className="text-xl  p-2 font-semibold">You may like</h2>
          <div className="flex flex-col">
            {products.slice(0, 6).map((product) => (
              <SimpleCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white p-2 mb-2">
        <h2 className="text-xl font-semibold p-2">Related Items</h2>
        <div className="flex gap-5 overflow-x-auto  whitespace-nowrap scrollbar-hide  ">
          {products.length > 0 &&
            products.map((product) => (
              <DummyCard key={product.id} product={product} isInfo={true} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
