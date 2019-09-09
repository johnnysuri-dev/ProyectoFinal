const { setWorldConstructor } = require("cucumber");

class BilleteraWorld {
    constructor() {
        this.billeteraId = 1;
        this.billeteraSaldo = 0;
    }

    setTo(id, saldo) {
        this.billeteraId = id;
        this.billeteraSaldo = saldo;
    }

    actualizarSaldo(monto) {
        this.billeteraSaldo += monto;
    }
}

setWorldConstructor(BilleteraWorld);