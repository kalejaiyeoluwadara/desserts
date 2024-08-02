import { cart, decrease_count, increase_count } from "@/icons/icons";
import Image from "next/image";
import React from "react";
interface Props {
  name: string;
}
function AddToCart({ name }: Props) {
  return (
    <>
      {true ? (
        <div className="w-[140px] z-20 cursor-pointer bg-red text-white absolute -bottom-4 h-[40px] flex-center gap-2 rounded-[99px] ">
          <div className="border-[1px]  cursor-pointer hover:text-red h-[17px] flex-center w-[17px] border-white rounded-full p-[3px] ">
            -
          </div>
          <p className="text-white text-sm font-medium">1</p>
          <div className="border-[1px]  cursor-pointer hover:text-red h-[17px] flex-center w-[17px] border-white rounded-full p-[3px] ">
            +
          </div>
        </div>
      ) : (
        <div className="w-[140px] z-20 hover:border-red cursor-pointer   bg-white absolute -bottom-4 h-[40px] flex-center gap-2 rounded-[99px] border">
          <Image src={cart} alt="cart" width={15} height={15} />
          <p className="text-red text-sm font-medium">Add to cart</p>
        </div>
      )}
    </>
  );
}

export default AddToCart;
