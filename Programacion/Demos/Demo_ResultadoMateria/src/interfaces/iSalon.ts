export interface iSalon {
    onNuevaEstudiante(callback: () => void): void;
    reportar({ promedioNotas, CantidadAprobados, CantidadReprobados }: { promedioNotas: number; CantidadAprobados: number; CantidadReprobados: number;}): void;
}