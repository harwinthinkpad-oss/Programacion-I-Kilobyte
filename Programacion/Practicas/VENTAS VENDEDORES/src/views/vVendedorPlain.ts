import { iVendedor } from "../interfaces/iVendedor.js";

export default class vVendedorPlain implements iVendedor {
    private formulario: HTMLFormElement;
    private entradaNombre: HTMLInputElement;
    private entradaMontoVenta: HTMLInputElement;
    private vista: HTMLElement;
    private botonCancelar: HTMLButtonElement;

    constructor() {
        this.vista = document.getElementById("vendedor") as HTMLElement;
        this.formulario = document.getElementById("vendedor_form") as HTMLFormElement;
        this.entradaNombre = document.getElementById("vendedor_inNombre") as HTMLInputElement;
        this.entradaMontoVenta = document.getElementById("vendedor_inMontoVenta") as HTMLInputElement;
        this.botonCancelar = document.getElementById("vendedor_btCancelar") as HTMLButtonElement;
    }

    get nombre(): string {
        return this.entradaNombre.value.trim();
    }

    get montoVenta(): number {
        return Number(this.entradaMontoVenta.value);
    }

    onAceptar(callback: () => void): void {
        this.formulario.onsubmit = (event) => {
            event.preventDefault();
            callback();
        };
    }

    onCancelar(callback: () => void): void {
        this.botonCancelar.onclick = callback;
    }

    mostrar(): void {
        this.formulario.reset();
        this.vista.hidden = false;
        this.entradaNombre.focus();
    }

    ocultar(): void {
        this.vista.hidden = true;
    }
}
