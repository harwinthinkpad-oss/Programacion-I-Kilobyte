export default class mIngresos {
    ingMenor = null;
    acIngreso = 0;
    cntPersonas = 0;
    procesarPersonas(p) {
        if (this.ingMenor === null || p.ingresos < this.ingMenor) {
            this.ingMenor = p.ingresos;
        }
        this.acIngreso += p.ingresos;
        this.cntPersonas++;
    }
    ingresoMenor() {
        return this.ingMenor ?? 0;
    }
    promedioIngreso() {
        return this.cntPersonas === 0 ? 0 : this.acIngreso / this.cntPersonas;
    }
}
//# sourceMappingURL=mIngresos.js.map