const { HttpError } = require("../helpers");

const validateUpdateFavorite = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.message = "missing field favorite";
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateUpdateFavorite;
