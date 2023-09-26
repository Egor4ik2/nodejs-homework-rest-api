import Contact from "../../models/contacts";
import { HttpError } from "../../helper/index";

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};

export default updateById;