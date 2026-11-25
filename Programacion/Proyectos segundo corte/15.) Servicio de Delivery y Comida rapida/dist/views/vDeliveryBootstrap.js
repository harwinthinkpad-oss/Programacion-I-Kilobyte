export default class VDeliveryBootstrap {
    btNuevo;
    filas;
    lblMoto;
    lblBici;
    lblPromedio;
    lblTiempoPromedio;
    lblMayorPropinaMoto;
    constructor() {
        this.btNuevo = document.getElementById("body_btNuevoEnvio");
        this.filas = document.getElementById("body_envios");
        this.lblMoto = document.getElementById("body_lblMoto");
        this.lblBici = document.getElementById("body_lblBici");
        this.lblPromedio = document.getElementById("body_lblPromedio");
        this.lblTiempoPromedio = document.getElementById("body_lblTiempoPromedio");
        this.lblMayorPropinaMoto = document.getElementById("body_lblMayorPropinaMoto");
    }
    onNuevoEnvio(callback) {
        this.btNuevo.onclick = callback;
    }
    reportar({ envio, totalMoto, totalBici, promedioGeneral, tiempoPromedio, mayorPropinaMoto, }) {
        if (envio !== null) {
            const fila = document.createElement("tr");
            const guia = document.createElement("td");
            guia.textContent = envio.numeroGuia;
            const tipo = document.createElement("td");
            tipo.textContent = envio.tipo;
            const costo = document.createElement("td");
            costo.textContent = `$${this.formatearMonto(envio.costo)}`;
            const tiempo = document.createElement("td");
            tiempo.textContent = `${envio.tiempoEstimado} min`;
            fila.append(guia, tipo, costo, tiempo);
            this.filas.append(fila);
        }
        this.lblMoto.textContent = `$${this.formatearMonto(totalMoto)}`;
        this.lblBici.textContent = `$${this.formatearMonto(totalBici)}`;
        this.lblPromedio.textContent = `$${this.formatearMonto(promedioGeneral)}`;
        this.lblTiempoPromedio.textContent = `${this.formatearMonto(tiempoPromedio)} min`;
        this.lblMayorPropinaMoto.textContent = `$${this.formatearMonto(mayorPropinaMoto)}`;
    }
    formatearMonto(monto) {
        return monto.toFixed(2);
    }
}
//# sourceMappingURL=vDeliveryBootstrap.js.map