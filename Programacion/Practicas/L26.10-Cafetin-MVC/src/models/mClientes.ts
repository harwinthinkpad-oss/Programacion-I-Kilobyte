export default class mClientes {
    private _nombre: string;
    private _tipocomida: number;
    private _jugo: boolean;
    private _cantidadcomida: number;

    constructor(nombre: string, tipocomida: number, jugo: boolean, cantidadcomida: number = 1) {
        this._nombre = nombre.trim();
        this._tipocomida = Number(tipocomida);
        this._jugo = jugo;
        this._cantidadcomida = Number(cantidadcomida);
    }
    set nombre(nombre: string) {
        this._nombre = nombre.trim();
    }  
    get nombre(): string {
        return this._nombre;
    }
    set tipocomida(tipocomida: number) {
        this._tipocomida = Number(tipocomida);
    }
    get tipocomida(): number {
        return this._tipocomida;
    }
    set jugo(jugo: boolean) {
        this._jugo = jugo;
    }
    get jugo(): boolean {
        return this._jugo;
    }
    set cantidadcomida(cantidadcomida: number) {
        this._cantidadcomida = Number(cantidadcomida);
    }  
    get cantidadcomida(): number {
        return this._cantidadcomida;
    }

    get totalGastado(): number {
        const precioComida = this.tipocomida === 1 ? 20 : this.tipocomida === 2 ? 10 : 0;
        const precioJugo = this.jugo ? 5 : 0;
        return this.cantidadcomida * precioComida + precioJugo;
    }
}