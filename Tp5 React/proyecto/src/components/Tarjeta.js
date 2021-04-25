import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Tarjeta extends Component {
  render() {
    return (
      <React.Fragment>
        <Card style={{ width: "18rem" }} className="margenesTarjeta">
          <Card.Body>
            <Button
              variant="outline-light"
              href={`detalleInstrumento/${this.props.id}`}
            >
              <Card.Img
                variant="top"
                className="maxAltoImg"
                src={
                  require(`../assets/img/${this.props.imagen.toLowerCase()}`)
                    .default
                }
              />
            </Button>
            <Card.Text>{this.props.instrumento}</Card.Text>
            <Card.Text>
              <b> $ {this.props.precio}</b>
            </Card.Text>
            <Card.Text>
              {this.props.costoEnvio == "G" ? (
                <p>
                  <img src={require("../assets/img/camion.png").default}></img>{" "}
                  Envio Gratis
                </p>
              ) : (
                <p>{`Costo de Envio Interior de Argentina: $ ${this.props.costoEnvio}`}</p>
              )}
            </Card.Text>
            <Card.Text>{this.props.cantidadVendida} vendidos</Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
 
}

export default Tarjeta;
/**
 *  //funcion para cabiar el valor del envio
  costosEnvios(costoEnvio) {
    if (this.props.costoEnvio == "G") {
      return (
        <p>
          <img src={require("../assets/img/camion.png").default}></img> Envio
          Gratis
        </p>
      );
    } else {
      return `Costo de Envio Interior de Argentina: $ ${this.props.costoEnvio}`;
    }
  }
 */
