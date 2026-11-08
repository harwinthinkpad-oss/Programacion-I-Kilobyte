export default class EmpresaVistaPlain {
    botonNuevoTrabajador;
    filasTrabajadores;
    totalMontoAdicional;
    totalAniosServicio;
    constructor() {
        this.botonNuevoTrabajador = document.getElementById("body_btNuevoTrabajador");
        this.filasTrabajadores = document.getElementById("body_tbodyTrabajadores");
        this.totalMontoAdicional = document.getElementById("body_lblTotalMontoAdicional");
        this.totalAniosServicio = document.getElementById("body_lblTotalAniosServicio");
    }
    onNuevoTrabajador(callback) {
        this.botonNuevoTrabajador.onclick = callback;
    }
    agregarAumento(nombre, tipo, antiguedad, aumento) {
        const fila = document.createElement("tr");
        const valores = [
            nombre,
            tipo === 1 ? "Obrero (20%)" : "Administrativo (10%)",
            `${antiguedad}`,
            `$${aumento}`,
        ];
        for (const valor of valores) {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.append(celda);
        }
        this.filasTrabajadores.append(fila);
    }
    reportar({ totalMontoAdicional, totalAniosServicio, }) {
        this.totalMontoAdicional.textContent = `${totalMontoAdicional}`;
        this.totalAniosServicio.textContent = `${totalAniosServicio}`;
    }
}
//# sourceMappingURL=EmpresaVistaPlain.js.map