import mPersonas from "./mPersona.js";
export default class mIngresos {
    private ingMenor: number | null = null;
    private acIngreso: number = 0;
    private cntPersonas: number = 0;

    procesarPersonas(p: mPersonas): void {
        if (this.ingMenor === null || p.ingresos < this.ingMenor) {
            this.ingMenor = p.ingresos;
        }
        this.acIngreso += p.ingresos;
        this.cntPersonas++;
    }
    ingresoMenor(): number {
        return this.ingMenor ?? 0;
    }
    promedioIngreso(): number {
        return this.cntPersonas === 0 ? 0 : this.acIngreso / this.cntPersonas;
    }
}