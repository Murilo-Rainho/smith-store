import { Orders } from '.prisma/client';

import prismaClient from '../../database/prismaClient';

const createOrder = async (
  { data: userId }: { data: number },
): Promise<Orders> => {
  const createdOrder = await prismaClient.orders.create({ data: { userId } });

  return createdOrder;
};

export default createOrder;
