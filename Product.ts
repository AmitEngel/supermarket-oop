export class Product{
    price: number;
    name: string;
    brand: string;
    barcode: string;

    constructor(price: number, name: string, brand: string, barcode: string) {
        this.price = price;
        this.name = name;
        this.brand = brand;
        this.barcode = barcode;
    }
}