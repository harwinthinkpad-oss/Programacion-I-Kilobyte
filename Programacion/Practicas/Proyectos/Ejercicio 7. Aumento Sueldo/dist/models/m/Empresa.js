export default class Empresa {
    _acMontoAdicional;
    constructor() {
        this._acMontoAdicional = 0;
    }
    procesarTrabajador(trabajador) {
        this._acMontoAdicional += trabajador.aumento();
    }
    totalMontoAdicional() {
        return this._acMontoAdicional;
    }
}
//# sourceMappingURL=Empresa.js.map