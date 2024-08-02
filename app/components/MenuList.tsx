"use client";
import React from "react";
import Image from "next/image";
import data from "@/public/data.json";
import { useEffect, useState } from "react";
import Card from "./Card";

export interface ImageProp {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}
interface Item {
  image: ImageProp;
  name: string;
  category: string;
  price: number;
}
function MenuList() {
  const [menu, setMenu] = useState<Item[]>(data);
  return (
    <section className="sm:col-span-2 sm:block flex items-start sm:w-auto justify-center flex-col">
      <h2 className="text-3xl text-rose-900 font-bold mb-6 ">Dessert</h2>
      <div className="grid items-center justify-center w-auto sm:grid-cols-3  gap-4 grid-cols-1">
        {data.map((item, id) => {
          return <Card key={id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default MenuList;
