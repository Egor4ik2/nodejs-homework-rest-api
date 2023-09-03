import express from "express";

const contactsRouter = express.Router();

import ctrl from "../../controller/contact.js";

import validateBody from "../../midwares/body.js";

import addSchema from "../../schema/schema.js";

contactsRouter.get("/", ctrl.getAll);

contactsRouter.get("/:contactId", ctrl.getById);

contactsRouter.post("/", validateBody(addSchema), ctrl.add);

contactsRouter.delete("/:contactId",ctrl.deleteById);

contactsRouter.put("/:contactId", validateBody(addSchema), ctrl.updateById);

export default contactsRouter;