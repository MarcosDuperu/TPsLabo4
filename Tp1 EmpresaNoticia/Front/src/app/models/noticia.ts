import { Generic } from "./generic";

export class Noticia implements Generic {
    id: number;
    tituloNoticia: string;
    resumenNoticia: string;
    // foto: any; tipo byte
    contenido: string;
    publicada: number;
    fecha: Date;

  }