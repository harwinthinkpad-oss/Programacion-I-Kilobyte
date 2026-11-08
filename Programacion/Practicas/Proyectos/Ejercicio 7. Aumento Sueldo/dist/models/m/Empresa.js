export default class Empresa {
    _acMontoAdicional;
    _acanios;
    constructor() {
        this._acMontoAdicional = 0;
        this._acanios = 0;
    }
    procesarTrabajador(trabajador) {
        this._acMontoAdicional += trabajador.aumento();
        this._acanios += trabajador.antiguedad;
    }
    totalMontoAdicional() {
        return this._acMontoAdicional;
    }
    totalAniosServicio() {
        return this._acanios;
    }
}
//# sourceMappingURL=Empresa.js.map