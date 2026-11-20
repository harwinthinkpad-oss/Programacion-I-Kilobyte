export default class VConvencionPlain {
    btNuevo;
    reporte;
    detalleAsistentes = "";
    constructor() {
        this.btNuevo = document.getElementById("body_btNuevoAsistente");
        this.reporte = document.getElementById("body_reporte");
    }
    onNuevoAsistente(callback) {
        this.btNuevo.onclick = callback;
    }
    reportar({ asistente, totalRecaudado, promedioCosplayers, porcentajeCosplayersArtesanales, }) {
        if (asistente !== null) {
            const artesanal = asistente.trajeArtesanal === null
                ? ""
                : `, traje artesanal: ${asistente.trajeArtesanal ? "Sí" : "No"}`;
            this.detalleAsistentes += `${asistente.nombre} (${asistente.cedula}) paga: $${this.formatearMonto(asistente.monto)}${artesanal}\n`;
        }
        let texto = this.detalleAsistentes;
        if (this.detalleAsistentes !== "")
            texto += "\n";
        texto += `Total recaudado en taquilla: $${this.formatearMonto(totalRecaudado)}\n`;
        texto += `Promedio pagado por Cosplayers: $${this.formatearMonto(promedioCosplayers)}\n`;
        texto += `Porcentaje de Cosplayers con traje artesanal: ${porcentajeCosplayersArtesanales.toFixed(2)}%`;
        this.reporte.textContent = texto;
    }
    formatearMonto(monto) {
        return Number.isInteger(monto) ? String(monto) : monto.toFixed(2);
    }
}
//# sourceMappingURL=vConvencionPlain.js.map