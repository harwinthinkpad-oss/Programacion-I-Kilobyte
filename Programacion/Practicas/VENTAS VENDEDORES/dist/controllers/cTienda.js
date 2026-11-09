import mTienda from "../models/mTienda.js";

export default class cTienda {
    constructor(vista, controladorVendedor) {
        this.modelo = new mTienda();
        this.vista = vista;
        this.controladorVendedor = controladorVendedor;
        this.vista.onNuevoVendedor(() => this.procesar1Vendedor());
        this.reportarResultados();
    }

    procesar1Vendedor() {
        this.controladorVendedor.solicitarVendedor((vendedor) => {
            if (vendedor === null) {
                return;
            }

            this.modelo.procesarVendedor(vendedor);
            this.reportarResultados();
        });
    }

    reportarResultados() {
        this.vista.reportar({
            ventasMayores: this.modelo.ventasMayores(),
            ventasMenores: this.modelo.ventasMenores(),
            montoTotal: this.modelo.montoTotal(),
        });
    }
}
