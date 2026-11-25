import MBici from "./mBici.js";
import MMoto from "./mMoto.js";
export default class MDelivery {
    acRecaudadoMoto = 0;
    acRecaudadoBici = 0;
    acCostoEnvios = 0;
    acTiempoEstimado = 0;
    cntEnvios = 0;
    procesar(envio) {
        const costo = envio.costoEnvio;
        const tiempo = envio.tiempoEstimado();
        this.acCostoEnvios += costo;
        this.acTiempoEstimado += tiempo;
        this.cntEnvios++;
        if (envio instanceof MMoto) {
            this.acRecaudadoMoto += costo;
        }
        else if (envio instanceof MBici) {
            this.acRecaudadoBici += costo;
        }
    }
    totalMoto() {
        return this.acRecaudadoMoto;
    }
    totalBici() {
        return this.acRecaudadoBici;
    }
    promedioGeneral() {
        if (this.cntEnvios > 0)
            return this.acCostoEnvios / this.cntEnvios;
        return 0;
    }
    tiempoPromedio() {
        if (this.cntEnvios > 0)
            return this.acTiempoEstimado / this.cntEnvios;
        return 0;
    }
}
//# sourceMappingURL=mDelivery.js.map