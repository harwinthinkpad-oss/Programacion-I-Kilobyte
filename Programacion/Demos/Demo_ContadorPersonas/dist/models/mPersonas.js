// Modelo de una persona; el sexo usa 1 para femenino y 2 para masculino.
export default class mPersonas {
    // Código numérico del sexo seleccionado.
    _sexo;
    // Nombre de la persona registrada.
    _nombre;
    // Guarda los datos de una persona nueva.
    constructor(sexo, nombre) {
        this._sexo = sexo;
        this._nombre = nombre;
    }
    // Permite consultar el código de sexo sin modificarlo.
    get sexo() {
        return this._sexo;
    }
    // Permite consultar el nombre sin modificarlo.
    get nombre() {
        return this._nombre;
    }
}
//# sourceMappingURL=mPersonas.js.map