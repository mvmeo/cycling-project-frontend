import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="p-4 bg-gray-100 flex">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="">
            <a href="/" className="text-xl font-bold text-red">
              MARCA
            </a>
          </div>
          <div className="">
            <ul className="flex space-x-8 ">
              <li className="text-beige">
                <a href="/bicicletas" className="text-lg text-red">
                  Bicicletas
                </a>
              </li>
              <li className="text-beige">
                <a href="/repuestos" className="text-lg text-red">
                  Repuestos
                </a>
              </li>
              <li>
                <a href="/accesorios" className="text-lg text-red">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>
          <div>
          <ul className="flex space-x-8 text-fullWhite">
              <li className="bg-red py-2 px-4 rounded-lg">
                <a href="/">Ir a comunidad</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
