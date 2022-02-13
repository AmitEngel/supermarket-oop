"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CashRegister_1 = require("./CashRegister");
const Consumer_1 = require("./Consumer");
const Product_1 = require("./Product");
const StaffMember_1 = require("./StaffMember");
const products = [
    new Product_1.Product(100, 'jagermeister', 'Mast-Jägermeister AG', 'asdr42fac3qfersfv43'),
    new Product_1.Product(7, 'Bread', 'Angel', 'sdfsdf34frv34')
];
const cashiers = [
    new StaffMember_1.StaffMember('Cashier'),
    new StaffMember_1.StaffMember('Cashier')
];
const stands = [
    new CashRegister_1.CashRegister(cashiers[0]),
    new CashRegister_1.CashRegister(cashiers[1])
];
stands[0].changeWorker(cashiers[1]);
stands[1].changeWorker(cashiers[0]);
stands[0].startNewPurchase();
stands[0].addProduct(products[1]);
stands[0].addProduct(products[1]);
stands[0].addProduct(products[0]);
stands[0].startNewPurchase(); // ERROR!!! In the middle of another bill
const consumer = new Consumer_1.Consumer(true);
const bill = stands[0].endPurchase(consumer);
console.log(bill); //114
