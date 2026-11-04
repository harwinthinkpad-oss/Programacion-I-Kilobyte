export default class mMayores {
    _acPersonas;
    _contMayores;
    constructor(acPersonas = 0, contMayores = 0) {
        this._acPersonas = acPersonas;
        this._contMayores = contMayores;
    }
    get acPersonas() {
        return this._acPersonas;
    }
    get contMayores() {
        return this._contMayores;
    }
    procesar(persona) {
        this._acPersonas++;
        if (persona.edad >= 18) {
            this._contMayores++;
        }
    }
    returnPorcMayores() {
        if (this._acPersonas === 0) {
            return 0;
        }
        return (this._contMayores / this._acPersonas) * 100;
    }
}
//# sourceMappingURL=mMayores.js.map