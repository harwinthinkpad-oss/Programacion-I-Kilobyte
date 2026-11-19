import mPersona from "./mPersona.js";

export default class mMayores {
    private _acPersonas: number;
    private _contMayores: number;
    private _acEdad: number;

    constructor(acPersonas: number = 0, contMayores: number = 0, acEdad: number = 0) {
        this._acPersonas = acPersonas;
        this._contMayores = contMayores;
        this._acEdad = acEdad;
    }

    get acPersonas(): number {
        return this._acPersonas;
    }

    get contMayores(): number {
        return this._contMayores;
    }
    get acEdad(): number {
        return this._acEdad;
    }
    procesar(persona: mPersona): void {
        this._acPersonas++;
        if (persona.edad >= 18) {
            this._contMayores++;
        }
        this._acEdad += persona.edad;
    }

    returnPorcMayores(): number {
        if (this._acPersonas === 0) {
            return 0;
        }

        return (this._contMayores / this._acPersonas) * 100;
    }
    totalEdad(): number {
        return this._acEdad;
    }
}