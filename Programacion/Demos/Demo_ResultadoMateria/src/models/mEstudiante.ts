export default class mEstudiante {
    private _cedula: number = 0;
    private _nota: number = 0;
    contructor({
        cedula, nota}: {
            cedula: number;
            nota: number;
        }) {
            this.cedula = cedula;
            this.nota = nota;
        }
    set cedula(cedula: number) {
        this._cedula = +cedula;
    }
    get cedula(): number {
        return this._cedula;
    }
    set nota(nota: number) {
        this._nota = +nota;
    }
    get nota(): number {
        return this._nota;
    }
}