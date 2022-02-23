import prismaClient from '../../database/prismaClient';

import { Product } from '../../interfaces';

const getAllProducts = async (): Promise<Product[]> => {
  const allProducts = await prismaClient.products.findMany();

  return allProducts;
};

export default getAllProducts;
