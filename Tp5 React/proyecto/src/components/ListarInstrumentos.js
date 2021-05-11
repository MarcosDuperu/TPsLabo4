import React, { Component } from "react";
import Navigation from "./Navigation";
//service
import { InstrumentoService } from "../InstrumentoService";

//para hacer tabla
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Menubar } from "primereact/menubar";
//ventana emergente dialog
import { Dialog } from "primereact/dialog";
//Formulario
import { InputText } from "primereact/inputtext";
//estilos
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
//footer
import { Button } from "primereact/button";
//mensaje de guardado exitoso
import { Toast, toast } from "primereact/toast";
class ListarInstrumentos extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      instrumento: {
        id: null,
        instrumento: null,
        precio: null,
        costoEnvio: null,
        cantidadVendida: null,
        imagen: null
      },
      //para seleccionar personas en la lista para poder editarla o eliminarla 
      selectedInstrumento: {

      }
    };
    this.items = [
      {
        label: "Nuevo",
        icon: "pi pi-fw pi-plus",
        command: () => {
          this.showSaveDialog();
        },
      },
      {
        label: "Editar",
        icon: "pi pi-fw pi-pencil",
        command: () => {
          this.showEditDialog();
        },
      },
      {
        label: "Eliminar",
        icon: "pi pi-fw pi-trash",
        command: () => {
          this.delete();
        },
      },
    ];
    this.instrumentoService = new InstrumentoService();
    //BINDS
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.footer = (
      <div>
        <Button
          label="Guardar"
          className="p-button p-component p-button-success p-button-text"
          onClick={this.save}
        />
      </div>
    );
  }

  //metodo que se ejecuta cuando el componente esta montado
  componentDidMount(){
    this.instrumentoService.getAll().then(data => this.setState({instrumentos: data}))
  }
  //metodo guardar
  save() {
    this.instrumentoService.save(this.state.instrumento).then(data => {
      this.setState({
        visible: false,
        instrumento: {
          id: null,
          instrumento: null,
          precio: null,
          costoEnvio: null,
          cantidadVendida: null,
          imagen: null
        }//hay que ver si se puede implementar un metodo q tenga esto para no repetir tanto codigo!!
      });
      //toast.current.show({ severity: 'success', summary: 'Atención', detail: 'Se guardo el registro correctamente' });
      alert("Se guardo el registro correctamente");
      this.instrumentoService.getAll().then(data => this.setState({instrumentos: data}))
    });
  }
  //metodoEliminar
  delete() {
    if (window.confirm("¿Realmente desea eliminar el Registro?")) {
      this.instrumentoService.delete(this.state.selectedInstrumento.id).then(data => {
       // toast.current.show({ severity: 'success', summary: 'Atención', detail: 'Se eliminó el registro correctamente' });
      alert("Se eliminó el registro correctamente");
       this.instrumentoService.getAll().then(data => this.setState({instrumentos: data}));
      });
    }
  }

  //metodo para mostrar el dialog ( esta vez para editar )
  showEditDialog() {
    this.setState({
      visible: true,
      //esto es para vaciar el input luego de cargar un registro
      instrumento: {
        id: this.state.selectedInstrumento.id,
        instrumento: this.state.selectedInstrumento.instrumento,
        precio: this.state.selectedInstrumento.precio,
        costoEnvio: this.state.selectedInstrumento.costoEnvio,
        cantidadVendida: this.state.selectedInstrumento.cantidadVendida,
        imagen: this.state.selectedInstrumento.imagen
      }
    })
  }

  //metodo para mostrar el dialog (ventana emergente donde se guarda persona)
  showSaveDialog() {
    this.setState({
      visible: true,
      //estp es para vaciar el input luego de cargar un registro
      instrumento: {
        id: null,
        instrumento: null,
        precio: null,
        costoEnvio: null,
        cantidadVendida: null,
        imagen: null
      }
    })
  //  document.getElementById('instrumentoF').reset();//obtenemos el formulario y reseteamos el formulario 
  }

  render() {
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <div style={{ width: "80%", margin: "0 auto", marginTop: "20px" }}>
          <Menubar model={this.items} />
          <br/>
          <Panel header="Lista de Instrumentos">
            <DataTable value={this.state.instrumentos} paginator={true} rows="4" selectionMode="single" selection={this.state.selectedInstrumento} onSelectionChange={e => this.setState({ selectedInstrumento: e.value })}>
              <Column field="id" header="ID"></Column>
              <Column field="instrumento" header="Instrumento"></Column>
              <Column field="imagen" header="Imagen"></Column>
              <Column field="precio" header="Precio"></Column>
              <Column field="costoEnvio" header="CostoEnvio"></Column>
              <Column field="cantidadVendida" header="CantidadVendida"></Column>
              <Column field="descripcion" header="Descripcion"></Column>
            </DataTable>
          </Panel>

          <Dialog
            header="CREAR INSTRUMENTO"
            visible={this.state.visible}
            style={{ width: "400px" }}
            footer={this.footer}
            modal={true}
            onHide={() => this.setState({ visible: false })}>
            <form id="instrumentoF">
              <span className="p-float-label">
                <InputText
                  value={this.state.instrumento.instrumento}
                  style={{ width: "100%" }}
                  id="instrumento"
                  onChange={(e) => {
                    let valor = e.target.value;
                    this.setState(prevState => {
                      let instrumento = Object.assign({}, prevState.instrumento);
                      instrumento.instrumento = valor;
                      return { instrumento };
                    })
                  }}/>
                <label htmlFor="instrumento">Instrumento</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText
                  value={this.state.instrumento.precio}
                  style={{ width: "100%" }}
                  id="precio"
                  onChange={(e) => {
                    let valor = e.target.value; //es xq sino quedaba en null el value
                    this.setState((previoState) => {
                      let instrumento = Object.assign({}, previoState.instrumento);
                      instrumento.precio = valor;
                      return { instrumento };
                    })
                  }}/>
                <label htmlFor="precio">Precio</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText
                  value={this.state.instrumento.costoEnvio}
                  style={{ width: "100%" }}
                  id="costoEnvio"
                  onChange={(e) => {
                    let valor = e.target.value;
                    this.setState((previoState) => {
                      let instrumento = Object.assign({},previoState.instrumento);
                      instrumento.costoEnvio = valor;
                      return { instrumento };
                    });
                  }}/>
                <label htmlFor="costoEnvio">Costo de Envio</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText
                  value={this.state.instrumento.cantidadVendida}
                  style={{ width: "100%" }}
                  id="cantidadVendida"
                  onChange={(e) => {
                    let valor = e.target.value;
                    this.setState((previoState) => {
                      let instrumento = Object.assign({},previoState.instrumento);
                      instrumento.cantidadVendida = valor;
                      return { instrumento };
                    });
                  }}/>
                <label htmlFor="cantidadVendida">Cantidad Vendida</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText
                  value={this.state.instrumento.descripcion}
                  style={{ width: "100%" }}
                  id="descripcion"
                  onChange={(e) => {
                    let valor = e.target.value;
                    this.setState((previoState) => {
                      let instrumento = Object.assign({},previoState.instrumento);
                      instrumento.descripcion = valor;
                      return { instrumento };
                    });
                  }}/>
                <label htmlFor="descripcion">Descripcion</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText
                  value={this.state.instrumento.imagen}
                  style={{ width: "100%" }}
                  id="imagen"
                  onChange={(e) => {
                    let valor = e.target.value;
                    this.setState((previoState) => {
                      let instrumento = Object.assign({},previoState.instrumento);
                      instrumento.imagen = valor;
                      return { instrumento };
                    });
                  }}/>
                <label htmlFor="imagen">Imagen</label>
              </span>
            </form>
          </Dialog>
        
        </div>
      </React.Fragment>
    );
  }
}

//<Toast ref={toast} />
export default ListarInstrumentos;
