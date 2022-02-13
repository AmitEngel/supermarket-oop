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
        if (this.productsArr.length == 0) {
            return;
        }
        else
            throw new Error('ERROR!!! In the middle of another bill');
    }
    addProduct(product) {
        this.productsArr.push(product);
        console.log(this.productsArr);
    }
    endPurchase(consumer) {
        if (consumer.isClubMember === true) {
            let total = this.productsArr.reduce((prev, curr) => {
                return prev + curr.price;
            }, 0);
            this.productsArr = [];
            return total;
        }
        this.productsArr = [];
    }
}
exports.CashRegister = CashRegister;
CashRegister.cashIdCounter = 1;
