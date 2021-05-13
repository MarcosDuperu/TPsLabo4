import React, { Component } from "react";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { instrumentos } from "../data/instrumentos.json";
import Button from "react-bootstrap/Button";

class DetalleInstrumento extends Component {
  constructor() {
    super();
    this.state = {
      instrumentos,
    };
  }

  render() {
    console.log(this.props);
    const parametroId = this.props.match.params.id;
    const InstrumentoEncontrado = instrumentos.filter(
      (instrumentos) => instrumentos.id === parametroId
    );
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Container style={{ margin: "2rem" }} >
          <Row>
            <Col>
            <br></br>
            <div align="center">
              <img
                className="minAltoImg"
                src={
                  require(`../assets/img/${InstrumentoEncontrado[0].imagen.toLocaleLowerCase()}`)
                    .default
                }
              />
              </div>
              <br></br>
              <tr></tr>
              Descripcion: <tr/> <br></br>
              <p>{InstrumentoEncontrado[0].descripcion}</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <p>{InstrumentoEncontrado[0].cantidadVendida} vendidos</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>{InstrumentoEncontrado[0].instrumento}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3> $ {InstrumentoEncontrado[0].precio}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5> Marca: {InstrumentoEncontrado[0].marca}</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5> Modelo: {InstrumentoEncontrado[0].modelo}</h5>
                </Col>
              </Row>
              <Row>
                <Col><br></br>
                  Costo Envio:
                  <h5> <br></br>
                    {InstrumentoEncontrado[0].costoEnvio === "G" ? (
                      <p style={{ color: "green" }}>
                        <img
                          className="minAltoImg"
                          src={require(`../assets/img/camion.png`).default}
                        />
                        Envío Gratis a todo el País
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>{`Costo de Envio Interior de Argentina: $ ${InstrumentoEncontrado[0].costoEnvio}`}</p>
                    )}
                  </h5>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <Button variant="outline-success" className="nav-Link" style={{ margin: "2rem" }}>
                    <h5>Agregar al Carrito</h5>
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="nav-Link"
                    href="/productos"
                  >
                    Volver
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default DetalleInstrumento;
