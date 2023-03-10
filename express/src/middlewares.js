const timer = (req, res, next) => {
  const start = Date.now();
  next();
  const end = Date.now();
  const duration = end - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${duration}ms`);
};

module.exports = { timer };
