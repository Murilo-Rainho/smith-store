import { getAllOrders } from '../../models/order';

import { getProductsByOrderId } from '../../models/product';

const getAllOrdersService = async () => {
  const allOrders = await getAllOrders();

  if (!allOrders) {
    return { error: 'Order not found' };
  }

  const allProductsArrays = await Promise.all(allOrders.map(({ id }) => (
    getProductsByOrderId(id)
  )));
  
  console.log('allProductsArrays', allProductsArrays);
  
  const allProductsIds = allProductsArrays.map((allProducts) => (
    allProducts.map(({ id }) => (id))
  ));

  console.log('allProductsIds', allProductsIds);

  const result = allOrders.map((order, index) => ({
    ...order,
    products: allProductsIds[index],
  }));

  console.log('result', result);

  return result;
};

export default getAllOrdersService;
