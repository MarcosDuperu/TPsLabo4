import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { CardColumns } from "react-bootstrap";

class Tarjeta extends Component {
  render() {
    return (
      <React.Fragment>
        <br></br> <br></br>
        <Card style={{ width: "90%" }} className="margenesTarjeta">
          <Card.Body>
            <Row>
            <CardColumns>
            <Button variant="outline-light" href={`detalleInstrumento/${this.props.id}`} >
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
                <p style={{ color: "green" }}>
                  <img src={require("../assets/img/camion.png").default}></img>{""}
                  Envio Gratis
                </p>
              ) : (
                <p style={{ color: "red" }}>{`Costo de Envio Interior de Argentina: $ ${this.props.costoEnvio}`}</p>
              )}
            </Card.Text>
            <Card.Text>{this.props.cantidadVendida} vendidos</Card.Text>
            </CardColumns>
            </Row>
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
