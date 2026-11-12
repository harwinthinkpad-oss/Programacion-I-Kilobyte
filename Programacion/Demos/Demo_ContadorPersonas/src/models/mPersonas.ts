// Modelo de una persona; el sexo usa 1 para femenino y 2 para masculino.
export default class mPersonas {
    // Código numérico del sexo seleccionado.
    private _sexo: number

    // Nombre de la persona registrada.
    private _nombre: string

    private _edad: number

    // Guarda los datos de una persona nueva.
    constructor(sexo: number, nombre: string, edad: number) {
        this._sexo = sexo
        this._nombre = nombre
        this._edad = edad
    }

    // Permite consultar el código de sexo sin modificarlo.
    get sexo(): number {
        return this._sexo
    }

    // Permite consultar el nombre sin modificarlo.
    get nombre(): string {
        return this._nombre
    }

    // Permite consultar la edad sin modificarla.
    get edad(): number {
        return this._edad
    }
}