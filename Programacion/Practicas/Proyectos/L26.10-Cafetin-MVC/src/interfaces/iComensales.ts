export default interface iComensales {
    onNuevoCliente(callback: () => void): void;
    reportarCliente(nombre: string, totalGastado: number): void;
    reportarEstado(datos: {
        clientesAtendidos: number;
        totalGanancias: number;
        jugosDisponibles: number;
        empanadasDisponibles: number;
        pastelitosDisponibles: number;
        mensaje: string;
        exito: boolean;
    }): void;
}