import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { instrumentos } from "../data/instrumentos.json";
import Tarjeta from "./Tarjeta";
import Navigation from "./Navigation";

class Productos extends Component {
  constructor() {
    super();
    //el estado es el que tiene el control de los datos en este caso de instrumentos
    this.state = {
      instrumentos //le asignamos el json
    };
  }
  render() {
    const instrumentos = this.state.instrumentos.map((instrumento, i) => {
      return (
        <Tarjeta
          key={instrumento.id}
          id={instrumento.id}
          instrumento={instrumento.instrumento}
          precio={instrumento.precio}
          costoEnvio={instrumento.costoEnvio}
          imagen={instrumento.imagen}
          cantidadVendida={instrumento.cantidadVendida}
        ></Tarjeta>
      );
    });
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Container>
          <list>{instrumentos}</list>
        </Container>
      </React.Fragment>
    );
  }
}

export default Productos;
