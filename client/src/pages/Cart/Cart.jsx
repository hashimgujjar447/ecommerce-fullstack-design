import React, { useEffect, useState } from "react";
import CartItems from "../../components/Cart/CartItems";
import CouponCard from "../../components/Cart/CoupenCard";
import OrderSummaryCard from "../../components/Cart/CartSummary";
import SavedForLater from "../../components/Cart/SavedItems";
import { UseContext } from "../../Context/EcommerceContext";

const Cart = () => {
  const { favorite, products } = UseContext();
  // const savedItems = [
  //   {
  //     id: 1,
  //     title: "GoPro HERO6 4K Action Camera - Black",
  //     price: 99.5,
  //     image: ["/assets/image 23.png"],
  //   },
  //   {
  //     id: 2,
  //     title: "GoPro HERO6 4K Action Camera - Black",
  //     price: 99.5,
  //     image: ["/assets/iphone.jpg"],
  //   },
  //   {
  //     id: 3,
  //     title: "GoPro HERO6 4K Action Camera - Black",
  //     price: 99.5,
  //     image: ["/assets/watch.jpg"],
  //   },
  //   {
  //     id: 4,
  //     title: "GoPro HERO6 4K Action Camera - Black",
  //     price: 99.5,
  //     image: ["/assets/laptop.jpg"],
  //   },
  //   {
  //     id: 5,
  //     title: "GoPro HERO6 4K Action Camera - Black",
  //     price: 99.5,
  //     image: ["/assets/laptop.jpg"],
  //   },
  //   {
  //     id: 6,
  //     title: "GoPro HERO6 4K Action Camera - Black",
  //     price: 99.5,
  //     image: ["/assets/laptop.jpg"],
  //   },
  // ];

  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const favoriteProducts = products.filter((item) =>
      favorite.includes(item.id),
    );
    setSavedItems(favoriteProducts); // assuming you have a setter
  }, [favorite, products]);

  return (
    <div className=" sm:px-6 md:px-5 lg:px-[50px] md:py-5 bg-[#f7fafc]">
      <div className="flex flex-col md:flex-row md:gap-4 justify-between">
        {/* Left: Cart Items */}
        <div className="flex-1 w-full flex justify-center">
          <CartItems />
        </div>

        {/* Right: Summary + Coupon */}
        <div className="flex flex-col md:gap-4 w-full md:w-[350px] lg:shrink-0">
          <CouponCard onApply={(code) => console.log(code)} />
          <OrderSummaryCard />
        </div>
      </div>
      <div className="mt-8 w-full bg-white">
        <SavedForLater savedItems={savedItems} />
      </div>
    </div>
  );
};

export default Cart;
