const { HttpError } = require("../helpers");

const validateAddUpdate = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      if (Object.keys(req.body).length) {
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
      } else {
        error.message = "missing fields";
      }
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateAddUpdate;
