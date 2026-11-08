import type { iIngresos } from "../interfaces/iIngresos.js";

export default class vIngresosPlain implements iIngresos {
    private readonly botonNuevaPersona = document.getElementById("btNuevaPersona") as HTMLButtonElement;
    private readonly salidaIngresoMenor = document.getElementById("lblIngresoMenor") as HTMLElement;
    private readonly salidaPromedioIngreso = document.getElementById("lblPromedioIngreso") as HTMLElement;

    onNuevaPersona(callback: () => void): void {
        this.botonNuevaPersona.onclick = callback;
    }

    reportar({ ingresoMenor, promedioIngreso }: { ingresoMenor: number; promedioIngreso: number }): void {
        this.salidaIngresoMenor.textContent = `${ingresoMenor}$`;
        this.salidaPromedioIngreso.textContent = `${promedioIngreso}$`;
    }
}
