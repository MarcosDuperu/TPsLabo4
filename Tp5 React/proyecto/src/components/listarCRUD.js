import React, { Component } from 'react';
import Navigation from "./Navigation";

import { InstrumentoService } from "../InstrumentoService";


class listarCRUD extends Component {
    
    constructor(){
        super();
        

          this.instrumentoService = new InstrumentoService();
    }



    componentDidMount(){
        this.instrumentoService.getAll().then(data => this.setState({instrumentos: data}))
      }






    render() {
        return (
            <React.Fragment>
        <Navigation></Navigation>


            </React.Fragment>
        );
    }
}

export default listarCRUD;
