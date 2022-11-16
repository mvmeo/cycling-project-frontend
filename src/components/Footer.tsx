import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-red mt-8 w-[80%] mx-auto">
      <div className="container mx-auto p-8 text-red grid md:grid-cols-2 gap-12">
        <div className="bg-red rounded-lg text-fullWhite p-4">
          <h1 className="font-bold">Tiendas referenciadas</h1>
          <div className="grid lg:grid-cols-3">
            <div>
              <ul className="p-2 space-y-2 mt-2">
                <li>
                  <a href="https://crossmountain.cl/">Crossmountain</a>
                </li>
                <li>
                  <a href="https://rockandroad.cl/">Rock & Road</a>
                </li>
                <li>
                  <a href="https://www.decathlon.cl/">Decathlon</a>
                </li>
                <li>
                  <a href="https://www.oxfordstore.cl/">Oxford Store</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="p-2 space-y-2 mt-2">
                <li>
                  <a href="https://sparta.cl/">Sparta</a>
                </li>
                <li>
                  <a href="https://beldacycles.cl/">Belda Cycles</a>
                </li>
                <li>
                  <a href="https://www.bianchistore.cl/ ">Bianchi Store</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <p>
            <b>MARCA</b> es una herramienta para mejorar la
            accesibilidad a diferentes productos ya ofrecidos en las pertinentes
            webs de tiendas de ciclismo y deporte chilenas.
          </p>
          <br />
          <p>
            Proyecto creado por Samuel Angulo para darle una mejor experiencia
            de compra a los ciclistas de Chile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
