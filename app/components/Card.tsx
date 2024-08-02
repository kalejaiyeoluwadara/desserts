import { cart, thumb } from "@/icons/icons";
import Image from "next/image";
import React from "react";
import { ImageProp } from "./MenuList";

interface CardProps {
  image: ImageProp;
  name: string;
  category: string;
  price: number;
}

function Card({ image, name, category, price }: CardProps) {
  return (
    <section className="h-auto w-[230px]">
      <div className="w-full h-[220px] flex-center relative ">
        <Image
          width={230}
          height={220}
          src={image.mobile}
          className="object-cover w-full h-full rounded-md"
          alt={name}
        />
        <div className="w-[140px] z-20 hover:border-red cursor-pointer hover:text-white  bg-white absolute -bottom-4 h-[40px] flex-center gap-2 rounded-[99px] border">
          <Image src={cart} alt="cart" width={15} height={15} />
          <p className="text-red text-sm font-medium">Add to cart</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-light">{category}</h3>
        <h5 className="text-lg font-medium">{name}</h5>
        <p className="text-red text-sm font-semibold">${price.toFixed(2)}</p>
      </div>
    </section>
  );
}

export default Card;
