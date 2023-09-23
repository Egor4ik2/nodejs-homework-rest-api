import express from "express";

import validateBody from "../../midwares/body";
import { addSchema, updateFavoriteSchema } from '../../models/contacts.js'
import { isValidId } from "../../midwares/index.js";
import { controlWrapper } from "../../helper/index.js";
import {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateStatusContact,
} from "../../controller/index";

const contactCtrl = {
  getAll: controlWrapper(getAll),
  getById: controlWrapper(getById),
  add: controlWrapper(add),
  deleteById: controlWrapper(deleteById),
  updateById: controlWrapper(updateById),
  updateStatusContact: controlWrapper(updateStatusContact),
};

const contactAddValidate = validateBody(addSchema);
const contactUpdateFavoriteValidate = validateBody(updateFavoriteSchema);

const contactsRouter = express.Router();

contactsRouter.get("/", contactCtrl.getAll);

contactsRouter.get("/:contactId", isValidId, contactCtrl.getById);

contactsRouter.post("/", contactAddValidate, contactCtrl.add);

contactsRouter.delete("/:contactId", isValidId, contactCtrl.deleteById);

contactsRouter.put(
  "/:contactId",
  isValidId,
  contactAddValidate,
  contactCtrl.updateById
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  contactUpdateFavoriteValidate,
  contactCtrl.updateStatusContact
);

export default contactsRouter;