export default class mPersonas {
    private _edad: number
    private _nombre: string

    constructor(edad: number, nombre: string) {
        this._edad = edad
        this._nombre = nombre
    }

    get edad(): number {
        return this._edad
    }

    get nombre(): string {
        return this._nombre
    }
}