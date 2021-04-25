import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation';
import  GoogleMaps from 'simple-react-google-maps';

class DondeEstamos extends Component {
  render() {
    
  
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyBHnH23oXzl37egmraORKVimYtaODhWhBw"}
          style={{ height: "400px", width: "1000px" }}
          zoom={12}
          center={{
            /*-32.87857299646513, -68.8624679930428  CIUDAD DE MENDOZA*/ 
            lat: -32.87857299646513,
            lng: -68.8624679930428
          }}
          markers={[
            /**-32.88635571906569, -68.8382777027928  Av. Las Heras y Av. San Martin*/
            { lat: -32.88635571906569, lng: -68.8382777027928 },
          ]}
        />
      </div>
      </React.Fragment>
    );
  }
}

export default DondeEstamos;
