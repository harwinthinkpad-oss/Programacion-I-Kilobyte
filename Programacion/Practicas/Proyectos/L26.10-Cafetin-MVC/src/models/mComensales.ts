import mClientes from "./mClientes.js";

export default class mComensales {
    private _actotalcliente: number;
    private _acjugos: number;
    private _acempanadas: number;
    private _acpastelitos: number;
    private _totalGanancias: number;

    constructor(
        actotalcliente: number = 0,
        acjugos: number = 10,
        acempanadas: number = 20,
        acpastelitos: number = 15,
        totalGanancias: number = 0,
    ) {
        this._actotalcliente = actotalcliente;
        this._acjugos = acjugos;
        this._acempanadas = acempanadas;
        this._acpastelitos = acpastelitos;
        this._totalGanancias = totalGanancias;
    }

    get actotalcliente(): number {
        return this._actotalcliente;
    }

    get acjugos(): number {
        return this._acjugos;
    }

    get acempanadas(): number {
        return this._acempanadas;
    }

    get acpastelitos(): number {
        return this._acpastelitos;
    }

    get totalGanancias(): number {
        return this._totalGanancias;
    }

    processClientData(client: mClientes): boolean {
        const cantidad = client.cantidadcomida;
        if (!Number.isInteger(cantidad) || cantidad < 1) return false;

        if (client.tipocomida === 1) {
            if (this._acempanadas < cantidad) return false;
        } else if (client.tipocomida === 2) {
            if (this._acpastelitos < cantidad) return false;
        } else {
            return false;
        }

        if (client.jugo && this._acjugos < 1) return false;

        if (client.tipocomida === 1) {
            this._acempanadas -= cantidad;
        } else {
            this._acpastelitos -= cantidad;
        }
        if (client.jugo) this._acjugos -= 1;
        this._actotalcliente += 1;
        this._totalGanancias += client.totalGastado;
        return true;
    }
}
