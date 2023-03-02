export interface ProductInterface {
    id: string,
    brand: string,
    name: string,
    desc: string,
    price: number
}

export class Product implements ProductInterface {
    id: string
    brand: string
    name: string
    desc: string
    price: number

    constructor() {}
}