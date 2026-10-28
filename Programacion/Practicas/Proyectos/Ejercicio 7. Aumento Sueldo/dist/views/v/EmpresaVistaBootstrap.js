export default class EmpresaVistaBootstrap {
    botonNuevoTrabajador;
    filasTrabajadores;
    totalMontoAdicional;
    constructor() {
        this.botonNuevoTrabajador = document.getElementById("body_btNuevoTrabajador");
        this.filasTrabajadores = document.getElementById("body_tbodyTrabajadores");
        this.totalMontoAdicional = document.getElementById("body_lblTotalMontoAdicional");
    }
    onNuevoTrabajador(callback) {
        this.botonNuevoTrabajador.onclick = callback;
    }
    agregarAumento(nombre, tipo, aumento) {
        const fila = document.createElement("tr");
        const valores = [
            nombre,
            tipo === 1 ? "Obrero (20%)" : "Administrativo (10%)",
            `$${aumento}`,
        ];
        for (const valor of valores) {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.append(celda);
        }
        this.filasTrabajadores.append(fila);
    }
    reportar({ totalMontoAdicional }) {
        this.totalMontoAdicional.innerHTML = `${totalMontoAdicional}`;
    }
}
//# sourceMappingURL=EmpresaVistaBootstrap.js.map