import express from "express";

import validateBody from "../../middlewares/validate";
import { addSchema, updateFavoriteSchema } from '../../models/contacts'
import { isValidId } from "../../middlewares/index";
import { Control } from "../../helper/index";
import {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateStatusContact,
} from "../../controller/index";

const contactCtrl = {
  getAll: Control(getAll),
  getById: Control(getById),
  add: Control(add),
  deleteById: Control(deleteById),
  updateById: Control(updateById),
  updateStatusContact: Control(updateStatusContact),
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