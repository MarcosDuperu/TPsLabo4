import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { CardColumns } from "react-bootstrap";

class TarjetaCrud extends Component {
    envio(envio) {
        
        if (envio == 'G') {
            return true;
        }else{
            return false;
        }
      }

render(){
    return(
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
                src={`data:image/png;base64,${this.props.imagen}`}/>
            </Button>
           
            <Card.Text href={`detalleInstrumento/${this.props.id}`}> {this.props.instrumento} </Card.Text>
            <Card.Text>
              <b> $ {this.props.precio}</b>
            </Card.Text>
            <Card.Text>
              {this.envio(`${this.props.costoEnvio}`) ? (
                <p style={{ color: "green" }}>
                  <img src={require("../assets/img/camion.png").default}></img>
                  Envio gratis a todo el pais!
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

export default TarjetaCrud;