export default class vIngresosPlain {
    botonNuevaPersona = document.getElementById("btNuevaPersona");
    salidaIngresoMenor = document.getElementById("lblIngresoMenor");
    salidaPromedioIngreso = document.getElementById("lblPromedioIngreso");
    onNuevaPersona(callback) {
        this.botonNuevaPersona.onclick = callback;
    }
    reportar({ ingresoMenor, promedioIngreso }) {
        this.salidaIngresoMenor.textContent = `${ingresoMenor}$`;
        this.salidaPromedioIngreso.textContent = `${promedioIngreso}$`;
    }
}
//# sourceMappingURL=vIngresosPlain.js.map