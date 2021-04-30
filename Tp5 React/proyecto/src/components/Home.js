import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from './Navigation';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Container fluid="md">
          <Row>
            <h2>
            Musical Hendrix es una tienda de instrumentos musicales con ya más
            de 15 años de experiencia. Tenemos el conocimiento y la capacidad
            como para informarte acerca de las mejores elecciones para tu compra
            musical.
            </h2>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
