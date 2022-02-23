import prismaClient from '../../database/prismaClient';

import { NewUser, User } from '../../interfaces';

const createUser = async ({ data }: { data: NewUser }): Promise<User> => {
  const createdUser = await prismaClient.users.create({ data });

  return createdUser;
};

export default createUser;
