import { createUser } from '../../models/user';

import NewUser from '../../interfaces/NewUser';

const createUserService = async (data: NewUser) => {
  const createdUser = await createUser({ data });

  return createdUser;
};

export default createUserService;
