import Header from "./components/Header";
import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

function App() {
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);
  const [error, guardarError] = useState(false);
  const [cargando, guardarCargando] = useState(false)

  let componente;
  if (cargando){
    componente = <Spinner/>
  }else if (total === 0) {
    componente = <Mensaje error={error} />;
  } else {
    componente = (
      <Resultado
        cantidad={cantidad}
        total={total}
        plazo={plazo}
        error={error}
      />
    );
  }
  return (
    <div className="App">
      <Fragment>
        <Header titulo="Calculador de un prestamo" />
        <div className="container">
          <Formulario
            cantidad={cantidad}
            guardarCantidad={guardarCantidad}
            plazo={plazo}
            guardarPlazo={guardarPlazo}
            guardarTotal={guardarTotal}
            error={error}
            guardarError={guardarError}
            guardarCargando = {guardarCargando}
          />
          <div className="mensajes">{componente}</div>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
