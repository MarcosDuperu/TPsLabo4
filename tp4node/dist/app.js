import { obtenerEmpleados, eliminarEmpleado } from './API.js';

(function() {
    const listado = document.querySelector('#listado-empleados');

    document.addEventListener('DOMContentLoaded', mostrarEmpleados);

    listado.addEventListener('click', confirmarEliminar);

    async function mostrarEmpleados() {
        const empleados = await obtenerEmpleados();

        empleados.forEach( empleado => {
            const { legajo, apellido, nombre, dni, sector, fechaIngreso, activo } = empleado;

            const row = document.createElement('tr');

            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${legajo} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${apellido} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${nombre} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${dni}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${sector}</p>
                    <p class="text-gray-600">${fechaIngreso}</p>
                    <p class="text-gray-600">${activo}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-empleado.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-empleado="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            listado.appendChild(row);
        });
    }

    function confirmarEliminar(e) {
        if(e.target.classList.contains('eliminar')) {
            const empleadoId = parseInt( e.target.dataset.empleado );

            const confirmar = confirm('¿Deseas eliminar este registro?');

            if(confirmar) {
                eliminarEmpleado(empleadoId);
            }
        }
    }
})();