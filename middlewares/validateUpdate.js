const { HttpError } = require("../helpers");

const validateUpdate = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.message = "missing fields";
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateUpdate;
