import { Order, OrderDetail } from '@domain/entity/OrderEntity';

import { OrderRepository } from '@domain/repository/OrderRepository';
import { UserEntity } from '@entity/UserEntity';

export class CustomerUserCase {
    constructor(private orderRepository: OrderRepository) {

    }

    makeOrder(customer: UserEntity, order: Order, orderDetail: OrderDetail) {
        

    }

}