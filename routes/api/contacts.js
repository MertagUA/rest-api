const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateAdd, validateUpdate } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateAdd(schemas.addUpdateSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put(
  "/:contactId",
  validateUpdate(schemas.addUpdateSchema),
  ctrl.updateById
);

module.exports = router;
