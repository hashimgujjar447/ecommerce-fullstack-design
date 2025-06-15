import React, { useEffect, useState } from "react";
import CartItems from "../../components/Cart/CartItems";
import CouponCard from "../../components/Cart/CoupenCard";
import OrderSummaryCard from "../../components/Cart/CartSummary";
import SavedForLater from "../../components/Cart/SavedItems";
import { UseContext } from "../../Context/EcommerceContext";
import PromoCard from "../../components/DiscountedCard";

const Cart = () => {
  const { favorite, products, cart } = UseContext();
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
      favorite.includes(item._id),
    );
    setSavedItems(favoriteProducts); // assuming you have a setter
  }, [favorite, products]);

  return (
    <div className=" sm:px-15 md:px-5 lg:px-[50px] sm:py-5 md:py-5 bg-[#f7fafc]">
      <h1 className="text-2xl mb-5 font-semibold md:inline-block hidden">
        My Cart({cart.length})
      </h1>
      <div className="flex flex-col md:flex-row md:gap-4 justify-between">
        {/* Left: Cart Items */}
        <div className="flex-1 w-full md:flex md:justify-center">
          <CartItems />
        </div>

        {/* Right: Summary + Coupon */}
        <div className="flex flex-col md:gap-4 w-full md:w-[350px] lg:shrink-0">
          <div className="md:inline-block hidden">
            <CouponCard onApply={(code) => console.log(code)} />
          </div>
          <OrderSummaryCard />
        </div>
      </div>
      {savedItems.length > 0 && (
        <div className="sm:mt-5 ">
          <SavedForLater savedItems={savedItems} />
        </div>
      )}
      {/* Promo Card */}
      <div className="mt-8 mb-10 w-full md:inline-block hidden">
        <PromoCard />
      </div>
    </div>
  );
};

export default Cart;
