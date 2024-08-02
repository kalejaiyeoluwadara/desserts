"use client";
import { useGlobal } from "@/context";
import { confirmed } from "@/icons/icons";
import Image from "next/image";
import React from "react";
import Button from "./Button";
function Modal() {
  const { modal, setModal, cart, setCart } = useGlobal();
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  return (
    <>
      {modal && (
        <main className="sm:flex-center flex justify-end items-end  min-h-screen w-screen fixed z-50 top-0 left-0 bg-black bg-opacity-[0.8]">
          <div className=" sm:h-[500px] h-[600px]  w-[500px] rounded-xl bg-white px-6 pt-6   ">
            <section>
              <Image
                className="mb-4"
                src={confirmed}
                alt="confirmed"
                height={40}
                width={40}
              />
              <h2 className="text-rose-900 text-3xl font-bold ">
                Order confirmed
              </h2>
              <p className="text-gray-700 text-base ">
                We hope you enjoy your food
              </p>
            </section>
            <section className="sm:h-[240px] relative bottom-0 h-[300px] overflow-y-scroll w-full bg-rose-50 p-4  my-6 rounded-md ">
              <div>
                <section className="flex flex-col gap-2">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-b-gray-100 py-6 flex items-center justify-between gap "
                    >
                      <div className="flex gap-2">
                        <Image
                          height={60}
                          width={60}
                          className="rounded-md flex-shrink-0 object-cover "
                          src={item.image}
                          alt=""
                        />
                        <section className="flex flex-col ">
                          <h4 className="font-semibold text-base">
                            {item.name}
                          </h4>
                          <div className="flex justify-between">
                            <div className="flex gap-3 mt-2">
                              <p className="text-red font-bold">
                                {item.count}x
                              </p>
                              <p className="text-gray-400">
                                @ ${item.base_price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </section>
                      </div>
                      <div>
                        <span className="font-semibold text-base ">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </section>
                {/* total */}
                <section className="flex mt-6 justify-between">
                  <p className="text-base font-medium text-gray-600">
                    Order Total
                  </p>
                  <h3 className="font-bold text-rose-900 text-lg ">
                    ${calculateTotal()}
                  </h3>
                </section>
              </div>
            </section>
            <Button
              name="Start New Order "
              handleClick={() => {
                setCart([]);
                setModal(false);
              }}
            />
          </div>
        </main>
      )}
    </>
  );
}

export default Modal;
