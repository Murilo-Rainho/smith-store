import prismaClient from '../../database/prismaClient';

const updateOrderIdProduct = async (productId: number, orderId: number): Promise<void> => {
  await prismaClient.products.update({
    where: { id: productId },
    data: { orderId },
  });
};

export default updateOrderIdProduct;
