export interface iPersonas {
    get nombre(): string;
    get ingresos(): number;
    mostrar(): void;
    ocultar(): void;
    mostrarError(mensaje: string): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}