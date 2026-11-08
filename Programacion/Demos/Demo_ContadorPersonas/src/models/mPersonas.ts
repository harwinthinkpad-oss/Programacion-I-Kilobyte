// Modelo de una persona; el sexo usa 1 para femenino y 2 para masculino.
export default class mPersonas {
    // Código numérico del sexo seleccionado.
    private _sexo: number

    // Nombre de la persona registrada.
    private _nombre: string

    // Guarda los datos de una persona nueva.
    constructor(sexo: number, nombre: string) {
        this._sexo = sexo
        this._nombre = nombre
    }

    // Permite consultar el código de sexo sin modificarlo.
    get sexo(): number {
        return this._sexo
    }

    // Permite consultar el nombre sin modificarlo.
    get nombre(): string {
        return this._nombre
    }
}