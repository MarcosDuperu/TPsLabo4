import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { instrumentos } from "../data/instrumentos.json";
import Tarjeta from "./Tarjeta";
import Navigation from "./Navigation";

class Productos extends Component {
  constructor() {
    super();
    //el estado es el que tiene el control de los datos en este caso de instrumentos
    this.state = ({
      instrumentosdb: [], //le asignamos el json
    });

  }
  //LEER Teoria https://es.reactjs.org/docs/react-component.html#overview
  //Este método se invoca inmediatamente después de que un componente se monte 
  //este es un buen lugar para instanciar la solicitud de red.
  componentDidMount() {
    this._isMounted = true;
    this.getInstrumentosServer();
  }

  //Este método es llamado cuando un componente se elimina del DOM
  componentWillUnmount() {
    this._isMounted = false;
  }

  getInstrumentosServer() {
    //local host 3306
    fetch('http://localhost:3306/api/instrumento/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ instrumentosdb: responseJson });
      });

  }





  render() {
    const instrumentos = this.state.instrumentosdb.map((instrumento, i) => {
      return (
        <TarjetaCrud
          key={instrumento.id}
          id={instrumento.id}
          instrumento={instrumento.instrumento}
          precio={instrumento.precio}
          costoEnvio={instrumento.costoEnvio}
          imagen={instrumento.imagen}
          cantidadVendida={instrumento.cantidadVendida}
        ></TarjetaCrud>
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
