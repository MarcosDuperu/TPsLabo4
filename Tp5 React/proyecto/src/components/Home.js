import React, { Component } from "react";
import Navigation from "./Navigation";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation></Navigation>
            <div className="jumbotron jumbotron-fluid, animated fadeIn">
              <div className="container">
                <h1 className="display-4">Musical Hendrix</h1>
                <p className="lead">
                  Tienda de instrumentos musicales con ya más de 15 años de
                  experiencia. Tenemos el conocimiento y la capacidad como para
                  informarte acerca de las mejores elecciones para tu compra
                  musical.
                </p>
              </div>
            </div>
      </React.Fragment>
    );
  }
}

export default Home;
