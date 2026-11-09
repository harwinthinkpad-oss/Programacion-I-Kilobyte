import mVendedor from "./mVendedor.js";

export default class mTienda {
    private cntVentasMayores100 = 0;
    private cntVentasMenores100 = 0;
    private acMontoTotal = 0;

    constructor() {
        this.cntVentasMayores100 = 0;
        this.cntVentasMenores100 = 0;
        this.acMontoTotal = 0;
    }

    procesarVendedor(vendedor: mVendedor): void {
        if (vendedor.montoVenta > 100) {
            this.cntVentasMayores100++;
        } else {
            this.cntVentasMenores100++;
        }
        this.acMontoTotal += vendedor.montoVenta;
    }

    ventasMayores(): number {
        return this.cntVentasMayores100;
    }

    ventasMenores(): number {
        return this.cntVentasMenores100;
    }

    montoTotal(): number {
        return this.acMontoTotal;
    }
}