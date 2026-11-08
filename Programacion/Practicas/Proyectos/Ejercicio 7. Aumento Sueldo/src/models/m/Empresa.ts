import Trabajador from "./Trabajador.js";

export default class Empresa {
  private _acMontoAdicional: number;
  private _acanios: number;

  constructor() {
    this._acMontoAdicional = 0;
    this._acanios = 0;
  }

  procesarTrabajador(trabajador: Trabajador): void {
    this._acMontoAdicional += trabajador.aumento();
    this._acanios += trabajador.antiguedad;
  }

  totalMontoAdicional(): number {
    return this._acMontoAdicional;
  }

  totalAniosServicio(): number {
    return this._acanios;
  }
}
