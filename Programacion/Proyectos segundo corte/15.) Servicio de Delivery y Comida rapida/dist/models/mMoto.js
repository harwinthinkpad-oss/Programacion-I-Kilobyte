import MEnvio from "./mEnvio.js";
export default class MMoto extends MEnvio {
    _distancia = 0;
    constructor({ numeroGuia, montoPedido, distancia, }) {
        super({ numeroGuia, montoPedido });
        this.distancia = distancia;
    }
    get distancia() {
        return this._distancia;
    }
    set distancia(distancia) {
        this._distancia = distancia;
    }
    get costoEnvio() {
        let costo = super.costoEnvio + this.distancia * 0.5;
        if (this.montoPedido > 25)
            costo -= 1.5;
        return costo;
    }
    tiempoEstimado() {
        let tiempo = this.tiempoBase + this.distancia * 1.5;
        if (this.montoPedido > 25) {
            tiempo -= 2;
        }
        return tiempo;
    }
}
//# sourceMappingURL=mMoto.js.map