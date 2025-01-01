import jwt from 'jsonwebtoken';

const authMiddleware = ({ req }) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.split(' ')[1];

  if (token) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      return { auth: payload };
    } catch (error) {
      console.error('Invalid token');
    }
  }
  return { auth: null };
};

export { authMiddleware };