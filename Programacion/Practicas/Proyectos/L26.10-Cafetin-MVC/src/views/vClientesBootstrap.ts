import iClientes from "../interfaces/iClientes.js";

declare const bootstrap: {
    Modal: new (element: HTMLElement) => {
        show(): void;
        hide(): void;
    };
};

export default class vClientesBootstrap implements iClientes {
    private inNombre: HTMLInputElement;
    private inTipoComida: HTMLSelectElement;
    private inCantidadComida: HTMLInputElement;
    private inJugo: HTMLInputElement;
    private formulario: HTMLFormElement;
    private botonCancelar: HTMLButtonElement;
    private modal: InstanceType<typeof bootstrap.Modal>;

    constructor() {
        this.inNombre = document.getElementById("cliente_inNombre") as HTMLInputElement;
        this.inTipoComida = document.getElementById("cliente_slTipoComida") as HTMLSelectElement;
        this.inCantidadComida = document.getElementById("cliente_inCantidadComida") as HTMLInputElement;
        this.inJugo = document.getElementById("cliente_ckJugo") as HTMLInputElement;
        this.formulario = document.getElementById("cliente_form") as HTMLFormElement;
        this.botonCancelar = document.getElementById("cliente_btCancelar") as HTMLButtonElement;
        const elementoModal = document.getElementById("cliente") as HTMLElement;
        this.modal = new bootstrap.Modal(elementoModal);
    }

    get nombre(): string {
        return this.inNombre.value.trim();
    }

    get jugo(): boolean {
        return this.inJugo.checked;
    }

    get tipocomida(): number {
        return Number(this.inTipoComida.value);
    }

    get cantidadcomida(): number {
        return Number(this.inCantidadComida.value);
    }

    mostrar(): void {
        this.formulario.reset();
        this.modal.show();
        this.inNombre.focus();
    }

    ocultar(): void {
        this.modal.hide();
    }

    botonaceptar(callback: () => void): void {
        this.formulario.onsubmit = (event) => {
            event.preventDefault();
            if (this.formulario.reportValidity()) callback();
        };
    }

    botoncancelar(callback: () => void): void {
        this.botonCancelar.onclick = callback;
    }
}
