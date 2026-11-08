export interface iTienda {
    onNuevoVendedor(callback: () => void): void;
    reportar(data: {ventasMayores: number; ventasMenores: number; montoTotal: number}): void;
}