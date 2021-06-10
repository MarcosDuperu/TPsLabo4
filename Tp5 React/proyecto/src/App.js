import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/css/App.css";
import Home from "./components/Home";
import DondeEstamos from "./components/DondeEstamos";
import Productos from "./components/Productos";
import DetalleInstrumento from "./components/DetalleInstrumento";
import ListarInstrumentos from "./components/ListarInstrumentos";
import listarCRUD from "./components/listarCRUD";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/dondeEstamos" component={DondeEstamos}></Route>
        <Route path="/listarInstrumentos" component={ListarInstrumentos}></Route>
        <Route path="/productos" component={Productos}></Route>
        <Route path="/detalleInstrumento/:id" component={DetalleInstrumento}></Route>
        <Route path="/listarCrud" component={listarCRUD}></Route>
      </Switch>
    );
  }
}

export default App;
