import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities';
import { FindManyOptions, Repository } from 'typeorm';
import { ICreateOrder, IUpdateOrder } from './types';

export class OrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  public async createOrder(createOrder: ICreateOrder): Promise<Order> {
    return await this.orderRepository.save(createOrder);
  }

  public async getOrderById(orderId: string): Promise<Order> {
    return await this.orderRepository.findOneBy({ orderId });
  }

  public async getOrderByParams(params: FindManyOptions): Promise<Order[]> {
    return await this.orderRepository.find(params);
  }

  public async updateOrderById(
    orderId: string,
    updateOrder: IUpdateOrder,
  ): Promise<Order> {
    await this.orderRepository.update(orderId, updateOrder);
    return await this.getOrderById(orderId);
  }

  public async deleteById(orderId: string): Promise<void> {
    await this.orderRepository.delete(orderId);
  }
}
