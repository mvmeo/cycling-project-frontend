import React from "react";
import { ProductProps } from "../types";

const Product = (props:ProductProps) => {
  return (
    <div className="bg-fullWhite rounded-[10px] m-4">
      <a className="" href="/bicicleta/:id">
        <div className="p-6 mb-8">
        <img
          src={props.image}
          alt={props.name}
          className="h-[300px] object-cover"
        />
        <h1 className="text-[30px]">{props.name}</h1>
        <h3 className="text-grayDarker mb-4">{props.store}</h3>
        <hr className="bg-white border-white " />

        <div className="mt-4">
        <p className="text-red uppercase float-right font-bold text-[25px]">
          ${Intl.NumberFormat("cl-ES").format(props.price).replace(",", ".").replace(",", ".")}
        </p>
        </div>
        </div>
      </a>
    </div>
  );
};

export default Product;
