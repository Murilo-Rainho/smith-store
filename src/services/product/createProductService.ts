import { createProduct } from '../../models/product';

import { NewProduct } from '../../interfaces';

const createProductService = async (dataProduct: NewProduct) => {
  const createdProduct = await createProduct({ data: dataProduct });

  return createdProduct;
};

export default createProductService;
