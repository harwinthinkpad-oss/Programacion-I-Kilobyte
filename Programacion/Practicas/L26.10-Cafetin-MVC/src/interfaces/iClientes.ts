export default interface iClientes {
    get nombre(): string;
    get jugo(): boolean;
    get tipocomida(): number;
    get cantidadcomida(): number;

    mostrar(): void;
    ocultar(): void;

    botonaceptar(callback: () => void): void;
    botoncancelar(callback: () => void): void;
}
// uwuxys