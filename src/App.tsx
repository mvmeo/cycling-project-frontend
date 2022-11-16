import React from "react";
import "./App.css";

function App() {
  //Deberias crear dos vistas, una para el usuario logueado y otra para el usuario no logueado
  //Si el usuario esta logueado, deberias mostrar la vista de usuario logueado
  //Si el usuario no esta logueado, deberias mostrar la vista de usuario no logueado (landing page)
  //Para saber si el usuario esta logueado o no, deberias usar el hook useAuthState
  //Si el usuario esta logueado, useAuthState te va a devolver un objeto con la propiedad user
  //Si el usuario no esta logueado, useAuthState te va a devolver un objeto vacio
  //Si el objeto esta vacio, el usuario no esta logueado
  //Si el objeto tiene la propiedad user, el usuario esta logueado

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
