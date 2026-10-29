export default class mComensales {
    _actotalcliente;
    _acjugos;
    _acempanadas;
    _acpastelitos;
    constructor(actotalcliente = 0, acjugos = 10, acempanadas = 20, acpastelitos = 15) {
        this._actotalcliente = actotalcliente;
        this._acjugos = acjugos;
        this._acempanadas = acempanadas;
        this._acpastelitos = acpastelitos;
    }
    get actotalcliente() {
        return this._actotalcliente;
    }
    get acjugos() {
        return this._acjugos;
    }
    get acempanadas() {
        return this._acempanadas;
    }
    get acpastelitos() {
        return this._acpastelitos;
    }
    processClientData(client) {
        const cantidad = client.cantidadcomida;
        if (!Number.isInteger(cantidad) || cantidad < 1)
            return false;
        if (client.tipocomida === 1) {
            if (this._acempanadas < cantidad)
                return false;
        }
        else if (client.tipocomida === 2) {
            if (this._acpastelitos < cantidad)
                return false;
        }
        else {
            return false;
        }
        if (client.jugo && this._acjugos < 1)
            return false;
        if (client.tipocomida === 1) {
            this._acempanadas -= cantidad;
        }
        else {
            this._acpastelitos -= cantidad;
        }
        if (client.jugo)
            this._acjugos -= 1;
        this._actotalcliente += 1;
        return true;
    }
}
//# sourceMappingURL=mComensales.js.map