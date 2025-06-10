import React from "react";
import { UseContext } from "../../Context/EcommerceContext";
import DummyCard from "../DummyCard";

const MobileViewBelowProject = () => {
  const { products } = UseContext();
  return (
    <div className="flex items-center gap-2">
      {products.map((product) => {
        return <DummyCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default MobileViewBelowProject;
