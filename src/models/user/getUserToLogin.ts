import prismaClient from '../../database/prismaClient';

import { User } from '../../interfaces';

const getUserToLogin = async (
  { username, password }: { username: string, password: string },
): Promise<User[]> => {
  const createdUser = await prismaClient.users.findMany({
    where: { username, password },
  });

  return createdUser;
};

export default getUserToLogin;
