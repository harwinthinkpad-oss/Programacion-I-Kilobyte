export interface iIngresos {
    onNuevaPersona(callback: () => void): void;
    reportar({ ingresoMenor, promedioIngreso }: { ingresoMenor: number; promedioIngreso: number;}): void;
}