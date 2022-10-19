export class Order {

    constructor(
        private id?: number,
        private userId?: number,
        private ownerId?: number,
        private orderDate?: Date,
        private shipped?: Date,
        private freight?: number,
        private status?: OrderStatus,

    ) {
        this.id = id;
        this.userId = userId;
        this.ownerId = ownerId;
        this.orderDate = orderDate;
        this.shipped = shipped;
        this.freight = freight;
        this.status = status;
    }

}
export class OrderDetail {

    constructor(
        private id?: number,
        private order_id?: number,
        private clothe_size_id?: number,
        private quantity?: number,
    ) {
        this.id = id;
        this.order_id = order_id;
        this.clothe_size_id = clothe_size_id;
        this.quantity = quantity;
    }

}

enum OrderStatus {
    PENDING = 1,
    SHIPPED = 2,
    CANCELLED = 3,
    CONFIRMED = 4,
}