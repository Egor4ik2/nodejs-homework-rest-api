import Contact from "../models/contacts";
import { Control } from "../helper/Control";

const getAll = async (req, res) => {
  const contacts = await Contact.find({}, "-createdAt -updatedAt");
  res.json(contacts);
};

export default getAll;