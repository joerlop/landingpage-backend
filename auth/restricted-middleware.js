require('dotenv').config();

module.exports = (req, res, next) => {
  const key = req.headers.key;

  if (key == process.env.KEY) {
    next();
  } else {
    res.status(401).json({ message: 'You are not authorized' });
  }
};
