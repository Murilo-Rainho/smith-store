import prismaClient from '../../database/prismaClient';

import { Product } from '../../interfaces';

const getProductsByOrderId = async (orderId: number): Promise<Product[]> => {
  const allProducts = await prismaClient.products.findMany({
    where: { orderId },
  });

  return allProducts;
};

export default getProductsByOrderId;
