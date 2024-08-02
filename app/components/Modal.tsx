"use client";
import { useGlobal } from "@/context";
import { confirmed } from "@/icons/icons";
import Image from "next/image";
import React from "react";
import Button from "./Button";
function Modal() {
  const { modal, setModal } = useGlobal();
  return (
    <>
      {modal && (
        <main className="flex-center h-screen w-screen fixed z-50 top-0 left-0 bg-black bg-opacity-[0.8]">
          <div className=" h-[500px] w-[500px] rounded-xl bg-white p-6 ">
            <section>
              <Image
                className="mb-4"
                src={confirmed}
                alt="confirmed"
                height={30}
                width={30}
              />
              <h2 className="text-rose-900 text-3xl font-bold ">
                Order confirmed
              </h2>
              <p className="text-gray-700 text-base ">
                We hope you enjoy your food
              </p>
            </section>
            <section className="bg-rose-50"></section>
            <section></section>
            <Button
              name="Start New Order "
              handleClick={() => alert("Hello world")}
            />
          </div>
        </main>
      )}
    </>
  );
}

export default Modal;
