import MEnvio from "./mEnvio.js";

export default class MMoto extends MEnvio {
  private _distancia: number = 0;
  private _propinaRecibida: number = 0;

  constructor({
    numeroGuia,
    montoPedido,
    distancia,
    propinaRecibida,
  }: {
    numeroGuia: string;
    montoPedido: number;
    distancia: number;
    propinaRecibida: number;
  }) {
    super({ numeroGuia, montoPedido });
    this.distancia = distancia;
    this.propinaRecibida = propinaRecibida;
  }

  get distancia(): number {
    return this._distancia;
  }
  set distancia(distancia: number) {
    this._distancia = distancia;
  }
  get propinaRecibida(): number {
    return this._propinaRecibida;
  }
  set propinaRecibida(propinaRecibida: number) {
    this._propinaRecibida = propinaRecibida;
  }
  get costoEnvio(): number {
    let costo = super.costoEnvio + this.distancia * 0.5;
    if (this.montoPedido > 25) costo -= 1.5;
    return costo;
  }
}
