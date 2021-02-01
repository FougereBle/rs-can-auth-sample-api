module.exports = (err, req, res, next) => {
  const error = {
    code: 500,
    message: "Internal Server Error",
  };

  if (process.env.NODE_ENV !== "production") {
    error.stack = err.stack;

    console.error(err.stack);
  }

  res.status(error.code).json({ error });
};
