import { isValidObjectId } from "mongoose";

import { HttpError } from "../helper/index";

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId))  {
    return next(HttpError(400, `${contactId} is not valid id`));
  }
  next();
};

export default isValidId;