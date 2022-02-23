import { createOrder } from '../../models/order';

import { Order, User } from '../../interfaces';
import { updateOrderIdProduct } from '../../models/product';

const createOrderService = async (
  { id: userId }: User,
  productsIds: number[],
): Promise<Order> => {
  const { id: orderId } = await createOrder({ data: userId });

  await Promise.all(productsIds.map((productId) => (
    updateOrderIdProduct(productId, orderId)
  )));

  return {
    userId,
    products: productsIds,
  };
};

export default createOrderService;
