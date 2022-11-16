import React from "react";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  return (
    <div className="mb-14">
      <Navbar />
      <div className="grid lg:grid-cols-2 container mx-auto">
        <div className="">
          <img
            src="https://rockandroad.cl/Content/products/1192/8/d0/8d022771603b4260862fa2b893695e9e_600.jpg"
            alt="Bicicleta"
            className="w-full"
          />
        </div>
        <div className="p-6 bg-white space-y-2 text-xl h-max rounded-lg lg:ml-8 lg:mt-8">
          <h1 className="uppercase font-extrabold text-2xl">Producto</h1>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F2A444"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F2A444"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F2A444"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F2A444"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#F2A444"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
          <h1 className=" text-red font-bold uppercase text-2xl">
            $ 1.500.000
          </h1>
          <p>
            <ul className="space-y-2">
              <li className="flex">
                <h1 className="uppercase mx-2">Característica:</h1> Descripción
                de la característica.
              </li>
              <li className="flex">
                <h1 className="uppercase mx-2">Característica:</h1> Descripción
                de la característica.
              </li>
              <li className="flex">
                <h1 className="uppercase mx-2">Característica:</h1> Descripción
                de la característica.
              </li>
              <li className="flex">
                <h1 className="uppercase mx-2">Característica:</h1> Descripción
                de la característica.
              </li>
              <li className="flex">
                <h1 className="uppercase mx-2">Característica:</h1> Descripción
                de la característica.
              </li>
              <li className="flex">
                <h1 className="uppercase mx-2">Característica:</h1> Descripción
                de la característica.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
