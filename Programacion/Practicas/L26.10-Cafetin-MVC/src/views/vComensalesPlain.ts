import iComensales from "../interfaces/iComensales.js";

export default class vComensalesPlain implements iComensales {
    private botonNuevoCliente: HTMLButtonElement;
    private lblClientesAtendidos: HTMLElement;
    private lblJugos: HTMLElement;
    private lblEmpanadas: HTMLElement;
    private lblPastelitos: HTMLElement;
    private lblMensaje: HTMLElement;
    private listaClientes: HTMLOListElement;

    constructor() {
        this.botonNuevoCliente = document.getElementById("body_btNuevoCliente") as HTMLButtonElement;
        this.lblClientesAtendidos = document.getElementById("body_lblClientesAtendidos") as HTMLElement;
        this.lblJugos = document.getElementById("body_lblJugos") as HTMLElement;
        this.lblEmpanadas = document.getElementById("body_lblEmpanadas") as HTMLElement;
        this.lblPastelitos = document.getElementById("body_lblPastelitos") as HTMLElement;
        this.lblMensaje = document.getElementById("body_lblMensaje") as HTMLElement;
        this.listaClientes = document.getElementById("body_listaClientes") as HTMLOListElement;
    }

    onNuevoCliente(callback: () => void): void {
        this.botonNuevoCliente.onclick = callback;
    }

    reportarCliente(nombre: string, totalGastado: number): void {
        this.listaClientes.querySelector("[data-placeholder]")?.remove();
        const registro = document.createElement("li");
        registro.textContent = `${nombre} — gastó ${totalGastado} Bs`;
        this.listaClientes.append(registro);
    }

    reportarEstado(datos: {
        clientesAtendidos: number;
        jugosDisponibles: number;
        empanadasDisponibles: number;
        pastelitosDisponibles: number;
        mensaje: string;
        exito: boolean;
    }): void {
        this.lblClientesAtendidos.textContent = String(datos.clientesAtendidos);
        this.lblJugos.textContent = String(datos.jugosDisponibles);
        this.lblEmpanadas.textContent = String(datos.empanadasDisponibles);
        this.lblPastelitos.textContent = String(datos.pastelitosDisponibles);
        this.lblMensaje.textContent = datos.mensaje;
        this.lblMensaje.dataset.estado = datos.exito ? "exito" : "error";
    }
}
