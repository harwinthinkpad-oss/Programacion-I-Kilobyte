import MAsistente from "./mAsistente.js";

export default class MCosplayer extends MAsistente {
  private _grupal: boolean = false;
  private _trajeArtesanal: boolean = false;

  constructor({
    nombre,
    cedula,
    grupal,
    trajeArtesanal,
  }: {
    nombre: string;
    cedula: number;
    grupal: boolean;
    trajeArtesanal: boolean;
  }) {
    super({ nombre, cedula, tipo: "Cosplayer" });
    this.grupal = grupal;
    this.trajeArtesanal = trajeArtesanal;
  }

  get grupal(): boolean {
    return this._grupal;
  }
  set grupal(grupal: boolean) {
    this._grupal = grupal;
  }

  get trajeArtesanal(): boolean {
    return this._trajeArtesanal;
  }
  set trajeArtesanal(trajeArtesanal: boolean) {
    this._trajeArtesanal = trajeArtesanal;
  }

  get pago(): number {
    return this.grupal ? 4.5 : 6;
  }
}
