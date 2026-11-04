export default class mPersona {
    private _nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }

    set edad(edad: number) {
        this._edad = edad;
    }

    get edad(): number {
        return this._edad;
    }
}