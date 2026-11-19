// Conserva en memoria los acumuladores de toda la captura.
export default class mContador {
    // Número de personas de ambos sexos registradas correctamente.
    contador;
    // Número de personas cuyo código de sexo es 1 (Femenino).
    acpersonasfemeninas;
    // Número de personas cuyo código de sexo es 2 (Masculino).
    acpersonasmasculinas;
    acEdad;
    // Empieza la captura sin personas procesadas ni conteos parciales.
    constructor() {
        this.contador = 0;
        this.acpersonasfemeninas = 0;
        this.acpersonasmasculinas = 0;
        this.acEdad = 0;
    }
    // Suma una persona al total y exactamente a su acumulador según el código F=1 o M=2.
    procesarPersona(persona) {
        this.contador++;
        this.acEdad += persona.edad;
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
    edadPromedio() {
        if (this.contador === 0) {
            return 0;
        }
        // El promedio es suma de edades / personas; no debe multiplicarse por 100.
        return this.acEdad / this.contador;
    }
    returnEdadPromedio() {
        return this.edadPromedio();
    }
}
//# sourceMappingURL=mContador.js.map