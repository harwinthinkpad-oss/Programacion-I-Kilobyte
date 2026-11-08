import mPersonas from "./mPersonas.js";

// Conserva en memoria los acumuladores de toda la captura.
export default class mContador {
    // Número de personas de ambos sexos registradas correctamente.
    private contador: number

    // Número de personas cuyo código de sexo es 1 (Femenino).
    private acpersonasfemeninas: number

    // Número de personas cuyo código de sexo es 2 (Masculino).
    private acpersonasmasculinas: number

    // Empieza la captura sin personas procesadas ni conteos parciales.
    constructor() {
        this.contador = 0
        this.acpersonasfemeninas = 0
        this.acpersonasmasculinas = 0
    }

    // Suma una persona al total y exactamente a su acumulador según el código F=1 o M=2.
    procesarPersona(persona: mPersonas): void {
        this.contador++
        switch (persona.sexo){
            case 1:
                this.acpersonasfemeninas++
                break
            case 2:
                this.acpersonasmasculinas++
                break
        }
    }

    // Entrega el total general para actualizar el indicador de la vista.
    returnContador(): number {
        return this.contador
    }

    // Entrega el total femenino para actualizar el indicador de la vista.
    returnAcPersonasFemeninas(): number {
        return this.acpersonasfemeninas
    }

    // Entrega el total masculino para actualizar el indicador de la vista.
    returnAcPersonasMasculinas(): number {
        return this.acpersonasmasculinas
    }
}