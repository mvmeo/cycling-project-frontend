import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Landing = () => {
  const Bicicletas = [
    {
      name: "Bicicleta 1",
      price: 100000,
      image:
        "https://rockandroad.cl/Content/products/1192/2/77/2776261dfa9d49a7b3bf5ba10953a0a8_600.jpg",
      store: "Tienda 1",
    },
    {
      name: "Bicicleta 2",
      price: 200000,
      image:
        "https://rockandroad.cl/Content/products/1192/8/d0/8d022771603b4260862fa2b893695e9e_600.jpg",
      store: "Tienda 2",
    },
    {
      name: "Bicicleta 3",
      price: 300000,
      image:
        "https://rockandroad.cl/Content/products/1192/b/d0/bd019025532e4b75b22f3e41ac0eb03c_600.jpg",
      store: "Tienda 3",
    },
    {
      name: "Bicicleta 4",
      price: 400000,
      image:
        "https://rockandroad.cl/Content/products/1192/4/1c/41c9b525be8e48d29edf74e915922d79_900.jpg",
      store: "Tienda 4",
    },
  ];

  const Repuestos = [
    {
      name: "Repuesto 1",
      price: 100000,
      image:
        "https://rockandroad.cl/Content/products/1192/f/37/f370cc6870894ca995f8546e25968b7e_290.jpg",
      store: "Tienda 1",
    },
    {
      name: "Repuesto 2",
      price: 200000,
      image:
        "https://rockandroad.cl/Content/products/1192/d/7b/d7b108accd584ae7bb582f12b08c667a_290.jpg",
      store: "Tienda 2",
    },
    {
      name: "Repuesto 3",
      price: 300000,
      image:
        "https://rockandroad.cl/Content/products/1192/3/65/365741995d854904ac5bf3d3b5f5d17d_290.jpg",
      store: "Tienda 3",
    },
    {
      name: "Repuesto 4",
      price: 400000,
      image:
        "https://rockandroad.cl/Content/products/1192/c/b8/cb8e6601ff8b4b02b1e5c9b0780cd16d_290.jpg",
      store: "Tienda 4",
    },
  ];

  const Accesorios = [
    {
      name: "Accesorio 1",
      price: 100000,
      image:
        "https://static.crossmountain.cl/a/200/images/static/montaje-topeak-omni-para-celular-auto_15168_sq.webp?treat2",
      store: "Tienda 1",
    },
    {
      name: "Accesorio 2",
      price: 200000,
      image:
        "https://static.crossmountain.cl/a/200/images/static/silla-delantera-shotgun-kids_942_sq.webp?treat2",
      store: "Tienda 2",
    },
    {
      name: "Accesorio 3",
      price: 300000,
      image:
        "https://static.crossmountain.cl/a/200/images/static/carcasa-cmontaje-topeak-iphone-55s-negverde_15124_sq.webp?treat2",
      store: "Tienda 3",
    },
    {
      name: "Accesorio 4",
      price: 400000,
      image:
        "https://static.crossmountain.cl/a/200/images/static/parador-de-bicicleta-lifeline-home-mechanic-workstand-mat_11555_sq.webp?treat2",
      store: "Tienda 4",
    },
  ];

  return (
    <div className="bg-white">
      <div className="">
        <Navbar />
        <div className="h-[400px] bg-fullWhite mb-4"></div>
        <div className="container mx-auto mt-6">
          <div className="flex gap-4 mt-4">
            <h1 className="text-[30px] ml-4 font-bold text-red">Bicicletas</h1>
            <a href="/">
              <button className="bg-red py-2 px-4 text-fullWhite rounded-lg">
                Ver más.
              </button>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {Bicicletas.map((Bicicleta) => (
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
            <a href="/">
              <button className="bg-red py-2 px-4 text-fullWhite rounded-lg">
                Ver más.
              </button>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {Repuestos.map((Repuesto) => (
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
            <a href="/">
              <button className="bg-red py-2 px-4 text-fullWhite rounded-lg">
                Ver más.
              </button>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {Accesorios.map((Accesorio) => (
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
