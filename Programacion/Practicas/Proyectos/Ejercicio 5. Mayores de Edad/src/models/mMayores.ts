import mPersona from "./mPersona.js";

export default class mMayores {
    private _acPersonas: number;
    private _contMayores: number;

    constructor(acPersonas: number = 0, contMayores: number = 0) {
        this._acPersonas = acPersonas;
        this._contMayores = contMayores;
    }

    get acPersonas(): number {
        return this._acPersonas;
    }

    get contMayores(): number {
        return this._contMayores;
    }
    
    procesar(persona: mPersona): void {
        this._acPersonas++;
        if (persona.edad >= 18) {
            this._contMayores++;
        }
    }

    returnPorcMayores(): number {
        if (this._acPersonas === 0) {
            return 0;
        }

        return (this._contMayores / this._acPersonas) * 100;
    }
}