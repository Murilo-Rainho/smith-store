import { getAllProducts } from '../../models/product';

const getAllProductsService = async () => {
  const allProducts = await getAllProducts();

  return allProducts;
};

export default getAllProductsService;
