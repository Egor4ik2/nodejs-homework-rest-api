import Contact from "../../models/contacts";
import { HttpError } from "../../helper/index";

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndDelete(contactId);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

export default deleteById;