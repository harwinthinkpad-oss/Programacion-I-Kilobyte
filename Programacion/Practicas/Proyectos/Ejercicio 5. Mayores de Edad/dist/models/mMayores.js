export default class mMayores {
    _acPersonas;
    _contMayores;
    _acEdad;
    constructor(acPersonas = 0, contMayores = 0, acEdad = 0) {
        this._acPersonas = acPersonas;
        this._contMayores = contMayores;
        this._acEdad = acEdad;
    }
    get acPersonas() {
        return this._acPersonas;
    }
    get contMayores() {
        return this._contMayores;
    }
    get acEdad() {
        return this._acEdad;
    }
    procesar(persona) {
        this._acPersonas++;
        if (persona.edad >= 18) {
            this._contMayores++;
        }
        this._acEdad += persona.edad;
    }
    returnPorcMayores() {
        if (this._acPersonas === 0) {
            return 0;
        }
        return (this._contMayores / this._acPersonas) * 100;
    }
    totalEdad() {
        return this._acEdad;
    }
}
//# sourceMappingURL=mMayores.js.map