import { Generic } from "./generic";

export class Empresa implements Generic{
  id: number;
  denominacion: string;
  telefono: string;
  hAtencion: string;
  qSomos: string;
  longitud: number;
  latitud: number;
  domicilio: string;
  email: string;
}
