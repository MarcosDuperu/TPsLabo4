import { Component } from "react";
import axios from "axios";

export class InstrumentoService extends Component {



  BASEURL = "http://localhost:9000/api/instrumento/";
  //todos
  getAll() {
    return axios
      .get(this.BASEURL + "listar-instrumentos")
      .then((res) => res.data);
  }
//guardar
  save(instrumento) {
    return axios
      .post(this.BASEURL + "crear-instrumento", instrumento)
      .then((res) => res.data);
  }
//eliminar
  delete(id) {
    return axios
      .delete(this.BASEURL + id)
      .then(res => res.data);
  }
  

   crearConFoto(){
    return axios
    .post(this.BASEURL + 'crear-con-foto')
    .then(res => res.data);
  }

   editarConFoto(id){
    return axios
    .put(this.BASEURL+"editar-con-foto/"+ id)
    .then(res => res.data);
   
  }






}
