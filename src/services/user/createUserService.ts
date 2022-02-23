import { createUser } from '../../models/user';

import { NewUser, User } from '../../interfaces';

const createUserService = async (data: NewUser): Promise<User> => {
  const createdUser = await createUser({ data });

  return createdUser;
};

export default createUserService;
