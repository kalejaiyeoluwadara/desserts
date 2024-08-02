"use client";
import { useGlobal } from "@/context";
import {
  cart as cartIcon,
  decrease_count,
  increase_count,
} from "@/icons/icons";
import Image from "next/image";
import React from "react";
import { CardProps } from "./Card";

interface AddToCartProps {
  cardProps: CardProps;
}

function AddToCart({ cardProps }: AddToCartProps) {
  const { cart, setCart } = useGlobal();
  const isPresent = cart.find((item) => item.name === cardProps.name);

  const add_to_cart = () => {
    const updatedCart = [
      ...cart,
      {
        name: cardProps.name,
        count: 1,
        price: cardProps.price,
        base_price: cardProps.price,
      },
    ];
    setCart(updatedCart);
  };

  const increaseCount = () => {
    const updatedCart = cart.map((item) =>
      item.name === cardProps.name
        ? {
            ...item,
            count: item.count + 1,
            price: item.base_price * (item.count + 1),
          }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseCount = () => {
    const updatedCart = cart
      .map((item) =>
        item.name === cardProps.name
          ? {
              ...item,
              count: item.count - 1,
              price: item.base_price * (item.count - 1),
            }
          : item
      )
      .filter((item) => item.count > 0);
    setCart(updatedCart);
  };

  return (
    <>
      {isPresent ? (
        <div className="w-[140px] z-20 cursor-pointer bg-red text-white absolute -bottom-4 h-[40px] flex-center gap-2 rounded-[99px]">
          <div
            onClick={decreaseCount}
            className="border-[1px] cursor-pointer hover:text-red hover:bg-white h-[20px] flex-center w-[20px] border-white rounded-full p-[3px]"
          >
            -
          </div>
          <p className="text-white text-sm font-medium">{isPresent.count}</p>
          <div
            onClick={increaseCount}
            className="border-[1px] cursor-pointer hover:text-red hover:bg-white h-[20px] flex-center w-[20px] border-white rounded-full p-[3px]"
          >
            +
          </div>
        </div>
      ) : (
        <div
          onClick={add_to_cart}
          className="w-[140px] z-20 hover:border-red cursor-pointer bg-white absolute -bottom-4 h-[40px] flex-center gap-2 rounded-[99px] border"
        >
          <Image src={cartIcon} alt="cart" width={15} height={15} />
          <p className="text-red text-sm font-medium">Add to cart</p>
        </div>
      )}
    </>
  );
}

export default AddToCart;
