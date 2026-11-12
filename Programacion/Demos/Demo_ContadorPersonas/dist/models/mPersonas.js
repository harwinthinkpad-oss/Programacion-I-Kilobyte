// Modelo de una persona; el sexo usa 1 para femenino y 2 para masculino.
export default class mPersonas {
    // Código numérico del sexo seleccionado.
    _sexo;
    // Nombre de la persona registrada.
    _nombre;
    _edad;
    // Guarda los datos de una persona nueva.
    constructor(sexo, nombre, edad) {
        this._sexo = sexo;
        this._nombre = nombre;
        this._edad = edad;
    }
    // Permite consultar el código de sexo sin modificarlo.
    get sexo() {
        return this._sexo;
    }
    // Permite consultar el nombre sin modificarlo.
    get nombre() {
        return this._nombre;
    }
    // Permite consultar la edad sin modificarla.
    get edad() {
        return this._edad;
    }
}
//# sourceMappingURL=mPersonas.js.map