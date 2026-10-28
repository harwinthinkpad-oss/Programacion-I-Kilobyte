import Trabajador from "./Trabajador.js";

export default class Empresa {
  private _acMontoAdicional: number;

  constructor() {
    this._acMontoAdicional = 0;
  }

  procesarTrabajador(trabajador: Trabajador): void {
    this._acMontoAdicional += trabajador.aumento();
  }

  totalMontoAdicional(): number {
    return this._acMontoAdicional;
  }
}
