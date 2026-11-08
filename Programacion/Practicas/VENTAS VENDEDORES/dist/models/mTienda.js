export default class mTienda {
    cntVentasMayores100 = 0;
    cntVentasMenores100 = 0;
    acMontoTotal = 0;

    procesarVendedor(vendedor) {
        if (vendedor.montoVenta > 100) {
            this.cntVentasMayores100++;
        } else {
            this.cntVentasMenores100++;
        }
        this.acMontoTotal += vendedor.montoVenta;
    }

    ventasMayores() {
        return this.cntVentasMayores100;
    }

    ventasMenores() {
        return this.cntVentasMenores100;
    }

    montoTotal() {
        return this.acMontoTotal;
    }
}
