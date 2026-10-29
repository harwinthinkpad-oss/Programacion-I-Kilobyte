export default class vComensalesPlain {
    botonNuevoCliente;
    lblClientesAtendidos;
    lblJugos;
    lblEmpanadas;
    lblPastelitos;
    lblMensaje;
    listaClientes;
    constructor() {
        this.botonNuevoCliente = document.getElementById("body_btNuevoCliente");
        this.lblClientesAtendidos = document.getElementById("body_lblClientesAtendidos");
        this.lblJugos = document.getElementById("body_lblJugos");
        this.lblEmpanadas = document.getElementById("body_lblEmpanadas");
        this.lblPastelitos = document.getElementById("body_lblPastelitos");
        this.lblMensaje = document.getElementById("body_lblMensaje");
        this.listaClientes = document.getElementById("body_listaClientes");
    }
    onNuevoCliente(callback) {
        this.botonNuevoCliente.onclick = callback;
    }
    reportarCliente(nombre, totalGastado) {
        this.listaClientes.querySelector("[data-placeholder]")?.remove();
        const registro = document.createElement("li");
        registro.textContent = `${nombre} — gastó ${totalGastado} Bs`;
        this.listaClientes.append(registro);
    }
    reportarEstado(datos) {
        this.lblClientesAtendidos.textContent = String(datos.clientesAtendidos);
        this.lblJugos.textContent = String(datos.jugosDisponibles);
        this.lblEmpanadas.textContent = String(datos.empanadasDisponibles);
        this.lblPastelitos.textContent = String(datos.pastelitosDisponibles);
        this.lblMensaje.textContent = datos.mensaje;
        this.lblMensaje.dataset.estado = datos.exito ? "exito" : "error";
    }
}
//# sourceMappingURL=vComensalesPlain.js.map