const validateAddUpdate = require("./validateAddUpdate");
const isValidId = require("./isValidId");
const validateUpdateFavorite = require("./validateUpdateFavorite");
const validateBody = require("./validateBody");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  validateAddUpdate,
  isValidId,
  validateUpdateFavorite,
  validateBody,
  authenticate,
  upload,
};
