import iComensales from "../interfaces/iComensales.js";
import mClientes from "../models/mClientes.js";
import mComensales from "../models/mComensales.js";
import cClientes from "./cClientes.js";

export default class cComensales {
    private modelo: mComensales = new mComensales(0, 10, 20, 15);
    private vista: iComensales;
    private controladorClientes: cClientes;

    constructor(vista: iComensales, controladorClientes: cClientes) {
        this.vista = vista;
        this.controladorClientes = controladorClientes;
        this.vista.onNuevoCliente(() => this.procesarCliente());
        this.reportarEstado("Listo para atender clientes.", true);
    }

    private procesarCliente(): void {
        this.controladorClientes.solicitarCliente((cliente: mClientes | null) => {
            if (cliente === null) return;

            const procesado = this.modelo.processClientData(cliente);
            if (procesado) {
                this.vista.reportarCliente(cliente.nombre, cliente.totalGastado);
            }
            this.reportarEstado(
                procesado
                    ? `Pedido de ${cliente.nombre} (${cliente.cantidadcomida} unidad${cliente.cantidadcomida === 1 ? "" : "es"}) procesado correctamente.`
                    : "No hay inventario suficiente para ese pedido.",
                procesado,
            );
        });
    }

    private reportarEstado(mensaje: string, exito: boolean): void {
        this.vista.reportarEstado({
            clientesAtendidos: this.modelo.actotalcliente,
            totalGanancias: this.modelo.totalGanancias,
            jugosDisponibles: this.modelo.acjugos,
            empanadasDisponibles: this.modelo.acempanadas,
            pastelitosDisponibles: this.modelo.acpastelitos,
            mensaje,
            exito,
        });
    }
}
