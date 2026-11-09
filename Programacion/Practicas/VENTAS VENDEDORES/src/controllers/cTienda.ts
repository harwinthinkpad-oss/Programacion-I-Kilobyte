import { iTienda } from "../interfaces/iTienda.js";
import mTienda from "../models/mTienda.js";
import cVendedor from "./cVendedor.js";

export default class cTienda {
    private modelo = new mTienda();
    private vista: iTienda;
    private controladorVendedor: cVendedor;

    constructor(vista: iTienda, controladorVendedor: cVendedor) {
        this.vista = vista;
        this.controladorVendedor = controladorVendedor;
        this.vista.onNuevoVendedor(() => this.procesar1Vendedor());
        this.reportarResultados();
    }

    private procesar1Vendedor(): void {
        this.controladorVendedor.solicitarVendedor((vendedor) => {
            if (vendedor === null) {
                return;
            }

            this.modelo.procesarVendedor(vendedor);
            this.reportarResultados();
        });
    }

    private reportarResultados(): void {
        this.vista.reportar({
            ventasMayores: this.modelo.ventasMayores(),
            ventasMenores: this.modelo.ventasMenores(),
            montoTotal: this.modelo.montoTotal(),
        });
    }
}
