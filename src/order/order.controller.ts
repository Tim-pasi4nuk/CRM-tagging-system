import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from 'src/entities';
import { CreateOrderDto, UpdateOrderDto } from './dto';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':userId')
  @ApiResponse({
    status: 200,
    type: [Order],
  })
  @ApiOperation({ summary: 'Get orders by userId' })
  async getOrderByUserId(@Param('userId') userId: string): Promise<Order[]> {
    return await this.orderService.getUserOrders(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({ status: 201, type: Order })
  async createOrder(@Body() body: CreateOrderDto): Promise<Order> {
    return await this.orderService.createOrder(body);
  }

  @Patch(':orderId')
  @ApiResponse({ status: 200, type: Order })
  @ApiOperation({ summary: 'Update order by orderId' })
  async updateOrder(
    @Param('orderId') orderId: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    return await this.orderService.updateOrderById(orderId, updateOrderDto);
  }

  @Delete(':orderId')
  @ApiResponse({ status: 204 })
  @ApiOperation({ summary: 'Delete order by orderId' })
  async deleteOrderById(@Param('orderId') orderId: string): Promise<void> {
    await this.orderService.deleteOrderById(orderId);
  }
}
