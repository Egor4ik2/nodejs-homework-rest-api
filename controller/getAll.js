import Contact from "../models/contacts";
import { controlWrapper } from "../helper/index";

const getAll = async (req, res) => {
  const contacts = await Contact.find({}, "-createdAt -updatedAt");
  res.json(contacts);
};

export default getAll;