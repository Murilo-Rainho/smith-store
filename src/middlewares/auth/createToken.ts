import jwt from 'jsonwebtoken';

const createToken = (username: string) => {
  // this usually stays in the environment variables.
  // Here, it's only out, for study reasons.
  const secret = 'mySuperSecret';

  const token = jwt.sign(username, secret);

  return token;
};

export default createToken;
