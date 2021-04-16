export class Empleado {
  legajo: number;
  apellido: string;
  nombre: string;
  dni: number;
  sector: string;
  fechaIngreso: Date;
  activo: boolean;

  constructor(
    legajo: number,
    apellido: string,
    nombre: string,
    dni: number,
    sector: string,
    fechaIngreso: Date,
    activo: boolean
  ) {}
}
