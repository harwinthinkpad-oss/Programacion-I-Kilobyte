export default class mVendedor {
    private _nombre: string = "";
    private _montoVenta: number = 0;

    constructor({nombre, montoVenta,
    }: {
        nombre: string;
        montoVenta: number;
    }) {
        this.nombre = nombre;
        this.montoVenta = montoVenta;
    }
    set nombre(nombre: string){
        this._nombre = nombre;
    }
    get nombre(): string {
        return this._nombre;
    }
    set montoVenta(montoVenta: number) {
        this._montoVenta = +montoVenta;
    }
    get montoVenta(): number {
        return this._montoVenta;
    }
}