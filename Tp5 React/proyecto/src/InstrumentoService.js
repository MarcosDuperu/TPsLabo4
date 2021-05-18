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
  
   crearConImagen(instrumento, archivo){
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('instrumento', instrumento.instrumento);
    formData.append('precio', instrumento.precio);
    formData.append('modelo', instrumento.modelo);
    return axios.post( this.BASEURL + 'crear-con-imagen',formData).then(res =>res.data);
  }

  crear(e){
    return axios.post(this.BASEURL,e, { headers: this.cabeceras}).then(res => res.data);
  }
}
