export interface iEstudiante {
    get cedula(): number;
    get nota(): number;
    mostrar(): void;
    ocultar(): void;
    mostrarError(mensaje: string): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}