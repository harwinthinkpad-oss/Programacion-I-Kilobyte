import mComensales from "../models/mComensales.js";
export default class cComensales {
    modelo = new mComensales(0, 10, 20, 15);
    vista;
    controladorClientes;
    constructor(vista, controladorClientes) {
        this.vista = vista;
        this.controladorClientes = controladorClientes;
        this.vista.onNuevoCliente(() => this.procesarCliente());
        this.reportarEstado("Listo para atender clientes.", true);
    }
    procesarCliente() {
        this.controladorClientes.solicitarCliente((cliente) => {
            if (cliente === null)
                return;
            const procesado = this.modelo.processClientData(cliente);
            if (procesado) {
                this.vista.reportarCliente(cliente.nombre, cliente.totalGastado);
            }
            this.reportarEstado(procesado
                ? `Pedido de ${cliente.nombre} (${cliente.cantidadcomida} unidad${cliente.cantidadcomida === 1 ? "" : "es"}) procesado correctamente.`
                : "No hay inventario suficiente para ese pedido.", procesado);
        });
    }
    reportarEstado(mensaje, exito) {
        this.vista.reportarEstado({
            clientesAtendidos: this.modelo.actotalcliente,
            jugosDisponibles: this.modelo.acjugos,
            empanadasDisponibles: this.modelo.acempanadas,
            pastelitosDisponibles: this.modelo.acpastelitos,
            mensaje,
            exito,
        });
    }
}
//# sourceMappingURL=cComensales.js.map