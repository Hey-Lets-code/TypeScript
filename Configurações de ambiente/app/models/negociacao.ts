export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;

// No javascript para declarar um atributo variável: #data, #quantidade #valor, e para acessar com o get utilizamos this.#data etc.

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}