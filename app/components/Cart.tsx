"use client";
import { cabbage, cancel } from "@/icons/icons";
import Image from "next/image";
import React, { useState } from "react";

interface Cart {
  count: number;
  base_price: number;
  name: string;
  price: number;
}

const CartComponent = () => {
  const [cart, setCart] = useState<Cart[]>([
    { count: 1, base_price: 5.5, name: "Classic Tiramisu", price: 5.5 * 1 },
    {
      count: 4,
      base_price: 7.0,
      name: "Vanilla Bean Crème Brûlée",
      price: 7.0 * 4,
    },
    { count: 2, base_price: 6.5, name: "Vanilla Panna Cotta", price: 6.5 * 2 },
  ]);

  const handleRemoveItem = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="min-h-[400px] sm:mt-0 mt-8 px-6 py-6 bg-white rounded-md w-auto p-4 ">
      <h2 className="text-2xl mb-6 text-red font-bold ">
        {"Your Cart (" + cart.length + ")"}
      </h2>
      <section className="flex flex-col gap-2">
        {cart.map((item, index) => (
          <div
            key={index}
            className="border-b border-b-gray-100 py-6 flex flex-col gap "
          >
            <h4 className="font-semibold text-base">{item.name}</h4>
            <div className="flex justify-between">
              <div className="flex gap-3 mt-2">
                <p className="text-red font-bold">{item.count}x</p>
                <p className="text-gray-400">
                  @ ${item.base_price.toFixed(2)} ${item.price.toFixed(2)}
                </p>
              </div>
              <button onClick={() => handleRemoveItem(index)}>
                <Image
                  className="border p-1 rounded-full"
                  height={20}
                  width={20}
                  src={cancel}
                  alt="Remove item"
                />
              </button>
            </div>
          </div>
        ))}
      </section>
      {/* total */}
      <section className="flex mt-6 justify-between">
        <p className="text-base font-medium text-gray-600">Order Total</p>
        <h3 className="font-bold text-rose-900 text-3xl ">
          ${calculateTotal()}
        </h3>
      </section>
      <section className="bg-rose-50 py-4 my-6 rounded-md flex-center gap-2">
        <Image
          className=""
          height={20}
          width={20}
          src={cabbage}
          alt="Carbon-neutral"
        />
        <p className="text-sm text-gray-800">
          This is a <span className="font-semibold">carbon-neutral</span>{" "}
          delivery
        </p>
      </section>
      <section className="w-full items-center justify-center">
        <button className="w-full rounded-full h-[55px] hover:bg-red-900 bg-red text-white font-semibold text-base ">
          Confirm Order
        </button>
      </section>
    </div>
  );
};

export default CartComponent;
