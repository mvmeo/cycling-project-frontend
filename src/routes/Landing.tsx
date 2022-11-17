import React from "react";

//components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

//jsons
import Bicicletas from "../data/Bicicletas.json";
import Repuestos from "../data/Repuestos.json";
import Accesorios from "../data/Accesorios.json";

//images
import Patron from "../images/patron.png";

const Landing = () => {
  return (
    <div className="bg-white">
      <div className="">
        <Navbar />
        {/* <div className="h-[400px] bg-fullWhite mb-4"></div> */}
        <div className="bg-contain bg-center h-[400px]" style={{backgroundImage: `url(${Patron})`}} >
        </div>
        <div className="container mx-auto mt-6">
          <div className="flex gap-4 mt-4">
            <h1 className="text-[30px] ml-4 font-bold text-red">Bicicletas</h1>
            <a href="/bicicletas">
              <button className="bg-red py-2 px-4 text-fullWhite rounded-lg">
                Ver más.
              </button>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {Bicicletas.slice(0,4).map((Bicicleta) => (
              <Product
                name={Bicicleta.name}
                price={Bicicleta.price}
                image={Bicicleta.image}
                store={Bicicleta.store}
              />
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <h1 className="text-[30px] ml-4 font-bold text-red">Repuestos</h1>
            <a href="/repuestos">
              <button className="bg-red py-2 px-4 text-fullWhite rounded-lg">
                Ver más.
              </button>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {Repuestos.slice(0,4).map((Repuesto) => (
              <Product
                name={Repuesto.name}
                price={Repuesto.price}
                image={Repuesto.image}
                store={Repuesto.store}
              />
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <h1 className="text-[30px] ml-4 font-bold text-red">Accesorios</h1>
            <a href="/accesorios">
              <button className="bg-red py-2 px-4 text-fullWhite rounded-lg">
                Ver más.
              </button>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {Accesorios.slice(0,4).map((Accesorio) => (
              <Product
                name={Accesorio.name}
                price={Accesorio.price}
                image={Accesorio.image}
                store={Accesorio.store}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
