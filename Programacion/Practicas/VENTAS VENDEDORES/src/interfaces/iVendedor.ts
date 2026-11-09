export interface iVendedor {
    get nombre(): string;
    get montoVenta(): number;
    mostrar(): void;
    ocultar(): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}