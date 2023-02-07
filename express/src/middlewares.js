const timer = (req, res, next) => {
  const start = Date.now();
  next();
  const end = Date.now();
  const duration = end - start;
  console.log(`${req.method} ${req.url} ${duration}s`);
};

module.exports = { timer };
