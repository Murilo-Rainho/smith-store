import prismaClient from '../../database/prismaClient';

import NewUser from '../../interfaces/NewUser';
import User from '../../interfaces/User';

const createUser = async ({ data }: { data: NewUser }): Promise<User> => {
  const createdUser = await prismaClient.users.create({ data });

  return createdUser;
};

export default createUser;
