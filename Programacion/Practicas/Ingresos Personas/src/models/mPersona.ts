export default class mPersona {
    private _nombre: string = "";
    private _ingresos: number = 0;
    constructor({
        nombre,ingresos,}: {
        nombre: string;
        ingresos: number;
    }) {
        this.nombre = nombre;
        this.ingresos = ingresos;
    }
    set nombre(nombre: string) {
        this._nombre = nombre.trim();
    }
    get nombre(): string {
        return this._nombre;
    }
    set ingresos(ingresos: number) {
        this._ingresos = +ingresos;
    }
    get ingresos(): number {
        return this._ingresos;
    }
}