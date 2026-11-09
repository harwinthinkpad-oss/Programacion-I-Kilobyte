// Conserva en memoria los acumuladores de toda la captura.
export default class mContador {
    // Número de personas de ambos sexos registradas correctamente.
    contador;
    // Número de personas cuyo código de sexo es 1 (Femenino).
    acpersonasfemeninas;
    // Número de personas cuyo código de sexo es 2 (Masculino).
    acpersonasmasculinas;
    // Empieza la captura sin personas procesadas ni conteos parciales.
    constructor() {
        this.contador = 0;
        this.acpersonasfemeninas = 0;
        this.acpersonasmasculinas = 0;
    }
    // Suma una persona al total y exactamente a su acumulador según el código F=1 o M=2.
    procesarPersona(persona) {
        this.contador++;
        switch (persona.sexo) {
            case 1:
                this.acpersonasfemeninas++;
                break;
            case 2:
                this.acpersonasmasculinas++;
                break;
        }
    }
    // Entrega el total general para actualizar el indicador de la vista.
    returnContador() {
        return this.contador;
    }
    // Entrega el total femenino para actualizar el indicador de la vista.
    returnAcPersonasFemeninas() {
        return this.acpersonasfemeninas;
    }
    // Entrega el total masculino para actualizar el indicador de la vista.
    returnAcPersonasMasculinas() {
        return this.acpersonasmasculinas;
    }
}
//# sourceMappingURL=mContador.js.map