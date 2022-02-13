import { Product } from "./Product";
import { Consumer } from "./Consumer";
import { StaffMember } from "./StaffMember";

export class CashRegister {
    cashId: number;
    productsArr: Product[];
    worker: StaffMember;
    private static cashIdCounter: number = 1;


    constructor(worker: StaffMember) {
        this.worker = worker;
        this.productsArr = [];
        this.cashId = CashRegister.cashIdCounter++;
    }
    changeWorker(role: StaffMember) {
        return role;
    }
    startNewPurchase() {
        if (this.productsArr.length == 0) {
            return;
        } else throw new Error('ERROR!!! In the middle of another bill');
    }
    addProduct(product: Product) {
        this.productsArr.push(product);
        console.log(this.productsArr);
    }
    endPurchase(consumer: Consumer) {
        if (consumer.isClubMember === true) {
            let total= this.productsArr.reduce((prev: number, curr: Product) => {
                return prev + curr.price;
            }, 0)
            this.productsArr = [];
            return total;
        }
        this.productsArr = [];
    }
}

