export interface Category {
    id: number,
    category: string,
    description: string,
}

export class Clothe {
    constructor(
        private cod: number,
        private categoryId: number,
        private name: string,
        private quantity: number,
        private cost: number,
        private price: number,
        private description: string,
        private imgUrl: string,
        private active: boolean,

    ) {
        this.cod = cod;
        this.categoryId = categoryId;
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
        this.price = price;
        this.description = description;
        this.imgUrl = imgUrl;
        this.active = active;
    }
}

export interface Size{
    id:number;
    size:string;
    description:string;
}

export interface ClotheSize {
    clotheSizeCode :number;
    clotheCode:number;
    sizeCode:number;
}