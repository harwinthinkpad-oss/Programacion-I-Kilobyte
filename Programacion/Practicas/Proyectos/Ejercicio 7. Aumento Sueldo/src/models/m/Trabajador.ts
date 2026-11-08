export type TipoTrabajador = 1 | 2;

export default class Trabajador {
  private _nombre!: string;
  private _tipo!: TipoTrabajador;
  private _sueldo!: number;
  private _antiguedad!: number;

  constructor(nombre: string, tipo: TipoTrabajador, sueldo: number, antiguedad: number) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.sueldo = sueldo;
    this.antiguedad = antiguedad;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get nombre(): string {
    return this._nombre;
  }

  set tipo(tipo: TipoTrabajador) {
    if (tipo !== 1 && tipo !== 2) {
      throw new RangeError("El tipo de trabajador debe ser 1 (obrero) o 2 (administrativo).");
    }
    this._tipo = tipo;
  }

  get tipo(): TipoTrabajador {
    return this._tipo;
  }

  set sueldo(sueldo: number) {
    this._sueldo = +sueldo;
  }

  get sueldo(): number {
    return this._sueldo;
  }

  set antiguedad(antiguedad: number) {
    this._antiguedad = +antiguedad;
  }
  
  get antiguedad(): number {
    return this._antiguedad;
  }

  aumento(): number {
    return this._sueldo * (this._tipo === 1 ? 0.2 : 0.1);
  }

}
