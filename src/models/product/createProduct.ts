import prismaClient from '../../database/prismaClient';

import { NewProduct, Product } from '../../interfaces';

const createProduct = async ({ data }: { data: NewProduct }): Promise<Product> => {
  const createdProduct = await prismaClient.products.create({ data });

  return createdProduct;
};

export default createProduct;
