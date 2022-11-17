import React from "react";
import Product from "../../components/Product";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Paginador from "../../components/Paginador";

//jsons
import data from "../../data/Repuestos.json";

const Repuestos = () => {
    return (
        <div className="bg-white">
          <div className="">
            <Navbar />
            <div className="container mx-auto">
              <div className="grid md:grid-cols-3 md:space-x-2 mx-4">
                <div className="flex">
                  <h1 className="text-[30px] font-bold text-red">REPUESTOS</h1>
                </div>
    
                <form className="col-span-2 my-4 md:my-0">
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Buscar..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="grid grid-col-1 mt-4 lg:mt-0 lg:grid-cols-3">
                <div className="bg-fullWhite rounded-lg md:ml-3 mx-4 lg:mt-4 h-max col-span-3 lg:col-span-1">
                  <div className="flex mt-4 ml-4 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                    <h1>Filtros</h1>
                  </div>
                  <form className="p-4 space-y-4">
                    <select name="Precio" id="" className="p-2 rounded-lg w-full">
                      <option value="none" selected>
                        Marca
                      </option>
                      <option value="0-500000">Marca 1</option>
                      <option value="500001-1000000">Marca 2</option>
                      <option value="1000001-1500000">Marca 3</option>
                      <option value="1500001-2000000">Marca 4</option>
                      <option value="2000001-more">Marca 5</option>
                    </select>
    
                    <select name="Precio" id="" className="p-2 rounded-lg w-full">
                      <option value="none" selected>
                        Precio
                      </option>
                      <option value="0-500000">menos de $500.000</option>
                      <option value="500001-1000000">
                        entre $500.000 y $1.000.000
                      </option>
                      <option value="1000001-1500000">
                        entre $1.000.000 y $1.500.000
                      </option>
                      <option value="1500001-2000000">
                        entre $1.500.000 y $2.000.000
                      </option>
                      <option value="2000001-more">más de $2.000.000</option>
                    </select>
    
                    <select name="Precio" id="" className="p-2 rounded-lg w-full">
                      <option value="none" selected>
                        Talla
                      </option>
                      <option value="0-500000">XL</option>
                      <option value="500001-1000000">L</option>
                      <option value="1000001-1500000">M</option>
                      <option value="1500001-2000000">S</option>
                    </select>
    
                    <select name="Precio" id="" className="p-2 rounded-lg w-full">
                      <option value="none" selected>
                        Tipo de bicicleta
                      </option>
                      <option value="0-500000">Ruta</option>
                      <option value="500001-1000000">Montaña</option>
                      <option value="1000001-1500000">Gravel</option>
                      <option value="1500001-2000000">E-bike</option>
                    </select>
                  </form>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:mt-4 lg:mt-0 col-span-2 m-4">
                  {data.map((product) => (
                    <Product
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      store={product.store}
                    />
                  ))}
                </div>
                
              </div>
              <Paginador />
            </div>
          </div>
    
          <Footer />
        </div>
      );
}

export default Repuestos
