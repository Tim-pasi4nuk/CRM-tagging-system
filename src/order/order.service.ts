import { HttpException, Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { Order } from 'src/entities';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { UserService } from 'src/user/user.service';
import { TagService } from 'src/tag/tag.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly userService: UserService,
    private readonly tagService: TagService,
  ) {}

  public async getUserOrders(userId: string): Promise<Order[]> {
    const user = await this.userService.getUserById(userId);

    if (!user) {
      throw new HttpException({ errorMessage: 'User don`t finded' }, 400);
    }

    return await this.orderRepository.getOrderByParams({
      where: { user: { userId } },
    });
  }

  public async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const { userId, tagIds, ...createOrder } = createOrderDto;
    const user = await this.userService.getUserById(userId);

    if (!user) {
      throw new HttpException({ errorMessage: 'User don`t finded' }, 400);
    }

    const tags = await this.tagService.getTagsByIds(tagIds);

    return await this.orderRepository.createOrder({
      ...createOrder,
      user,
      tags,
    });
  }

  public async updateOrderById(
    orderId: string,
    updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    const { tagIds, ...createOrder } = updateOrderDto;

    const tags = await this.tagService.getTagsByIds(tagIds);

    return await this.orderRepository.updateOrderById(orderId, {
      ...createOrder,
      tags,
    });
  }

  public async deleteOrderById(orderId: string): Promise<void> {
    return await this.orderRepository.deleteById(orderId);
  }
}
