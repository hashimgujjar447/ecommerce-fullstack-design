import React, { useEffect, useState } from "react";
import DetailedCartCard from "./ProductCartCard";
import { UseContext } from "../../Context/EcommerceContext";

const CartItems = () => {
  const { cart, removeFromCart, products } = UseContext();
  const [items, setItems] = useState(null);

  useEffect(() => {
    const totalItems = products.filter((product) =>
      cart.some((item) => item.id === product.id),
    );
    setItems(totalItems);
  }, [cart, products]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  if (!items) {
    return <div>No items available</div>;
  }

  return (
    <div className="flex flex-col w-full items-center md:gap-2">
      {items &&
        items?.map((item) => (
          <DetailedCartCard
            key={item.id}
            product={item}
            onDelete={() => {
              removeFromCart(item.id);
            }}
          />
        ))}
    </div>
  );
};

export default CartItems;
