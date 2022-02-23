import { getOrderById } from '../../models/order';

import { getProductsByOrderId } from '../../models/product';

const getOrderByIdService = async (orderId: number) => {
  const order = await getOrderById(orderId);

  if (!order) {
    return { error: 'Order not found' };
  }

  const allProducts = await getProductsByOrderId(orderId);

  const allProductsIds = allProducts.map(({ id }) => id);

  return {
    ...order,
    products: allProductsIds,
  };
};

export default getOrderByIdService;
