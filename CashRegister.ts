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
        
    }
    addProduct(product: Product) {
        this.productsArr.push(product);
    }
    endPurchase(consumer: Consumer) {
        if (consumer.isClubMember === true) {
            return this.productsArr.reduce((prev: number, curr: Product) => {
              return prev + curr.price
           },0)
       }
    }
}