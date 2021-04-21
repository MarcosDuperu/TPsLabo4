import express from "express";
import rutas from "./rutas";
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(rutas);

app.listen(3000, () => {
  console.log(`Servidor en puerto 3000`, 3000);
});

//////////////////////////////////////////////////////////////

//const formulario = document.getElementById("formulario");

/*
eventListeners();

function eventListeners() {
    // Agregar empleado
    formulario.addEventListener('submit', cargarDatosAPI);
}
*/
/*
cargarDatosAPI();

async function cargarDatosAPI(){
    try {
        let cargar = await fetch('https://localhost:3000/insert');
        let empleados = await cargar.text();
        console.log(empleados);
    } catch (error) {
        console.error(error);
    }

}*/



