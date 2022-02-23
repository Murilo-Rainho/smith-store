import prismaClient from '../../database/prismaClient';

import { Orders } from '.prisma/client';

const getAllOrders = async (): Promise<Orders[]> => {
  const order = await prismaClient.orders.findMany();

  return order;
};

export default getAllOrders;
