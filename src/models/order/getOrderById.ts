import prismaClient from '../../database/prismaClient';

import { Orders } from '.prisma/client';

const getOrderById = async (orderId: number): Promise<Orders | null> => {
  const order = await prismaClient.orders.findFirst({
    where: { id: orderId },
  });

  return order;
};

export default getOrderById;
