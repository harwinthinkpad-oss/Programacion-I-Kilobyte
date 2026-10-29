export default class mArticulo {
  private _codigo: number = 0;
  private _costo: number = 0;
  private _precioVenta: number = 0;

  constructor({
    codigo, costo, precioVenta,
  }: {
    codigo: number;
    costo: number;
    precioVenta: number;
  }) {
    this.codigo = codigo;
    this.costo = costo;
    this.precioVenta = precioVenta;
  }

  set codigo(codigo: number) {
    this._codigo = +codigo;
  }
  get codigo(): number {
    return this._codigo;
  }

  set costo(costo: number) {
    this._costo = +costo;
  }
  get costo(): number {
    return this._costo;
  }

  set precioVenta(precioVenta: number) {
    this._precioVenta = +precioVenta;
  }
  get precioVenta(): number {
    return this._precioVenta;
  }

  ganancia():number {
    return this.precioVenta - this.costo;
  }
}