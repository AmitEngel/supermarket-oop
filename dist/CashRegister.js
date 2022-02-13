"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashRegister = void 0;
class CashRegister {
    constructor(worker) {
        this.worker = worker;
        this.productsArr = [];
        this.cashId = CashRegister.cashIdCounter++;
    }
    changeWorker(role) {
        return role;
    }
    startNewPurchase() {
    }
    addProduct(product) {
        this.productsArr.push(product);
    }
    endPurchase(consumer) {
        if (consumer.isClubMember === true) {
            return this.productsArr.reduce((prev, curr) => {
                return prev + curr.price;
            }, 0);
        }
    }
}
exports.CashRegister = CashRegister;
CashRegister.cashIdCounter = 1;
