const { HttpError } = require("../helpers");

const validateAdd = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      let missingFields = [];
      let missingFieldsMessage = "";
      if (!req.body.name) {
        missingFields.push("name");
      }
      if (!req.body.email) {
        missingFields.push("email");
      }
      if (!req.body.phone) {
        missingFields.push("phone");
      }
      for (const missingField of missingFields) {
        missingFieldsMessage += missingField;
        missingFieldsMessage += " ";
      }
      if (missingFields.length > 1) {
        error.message = `missing required ${missingFieldsMessage}fields`;
      } else {
        error.message = `missing required ${missingFieldsMessage}field`;
      }
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateAdd;
