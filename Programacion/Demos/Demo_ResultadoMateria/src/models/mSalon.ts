import mEstudiante from "./mEstudiante";
export default class mSalon {
    private acNotas: number = 0;
    private cntEstudiantes: number = 0;
    private acmAprobados: number = 0;
    private acmReprobados: number = 0;
    
    procesarEstudiantes(e: mEstudiante): void {
        if (e.nota >= 47.5){
            this.acmAprobados++;
        }
        if (e.nota < 47.5){
            this.acmReprobados++;
        }
        this.cntEstudiantes ++;
        this.acNotas += e.nota;
    }
    PromedioNotas(): number {
        return (this.acNotas/this.cntEstudiantes)*100;
    }
       
}