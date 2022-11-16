import React from "react";


const Login = () => {
  return (
    <div>
      <div className="p-8 bg-fullWhite md:w-[500px] w-[400px] rounded-xl">
        <h1 className="text-3xl font-bold">¡Bienvenido de vuelta!</h1>

        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-grayDarker text-sm font-bold mb-2">
              Nombre de usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-grayDarker leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nombre de usuario"
            />
          </div>
          <div>
            <label className="block text-grayDarker text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-grayDarker leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <button className="p-2 h-14 bg-red hover:bg-redDarker rounded-md w-full text-fullWhite font-bold">
            Iniciar sesión
          </button>
          <hr
            style={{
              color: "#F2F0EB",
              backgroundColor: "#F2F0EB",
              height: 0.5,
              borderColor: "#F2F0EB",
            }}
          />
          <button className="p-2 bg-fullWhite hover:bg-grayLighter border-[1px] rounded-md w-full  font-bold space-x-2">
          <div className="lg:mx-[80px] mx-[30px] flex">
            <img src="https://www.vectorlogo.zone/logos/strava/strava-icon.svg" alt="" className="h-8 w-8 mt-1"/>
            <h2 className="p-2">Iniciar sesión con Strava</h2>
          </div>
          </button>
          <button className="p-2 bg-fullWhite hover:bg-grayLighter border-[1px] rounded-md w-full  font-bold space-x-2">
          <div className="lg:mx-[80px] mx-[30px] flex">
            <img src="https://www.vectorlogo.zone/logos/google/google-tile.svg" alt="" className="h-8 w-8 mt-1"/>
            <h2 className="p-2">Iniciar sesión con Google</h2>
          </div>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
