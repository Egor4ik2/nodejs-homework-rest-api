import contactsAPI from "../models/contacts.js";
import HttpError from "../helper/HttpError.js";
import controlWrapper from "../helper/controlWrapper.js";

const getAll = async (req, res) => {
  const contacts = await contactsAPI.listContacts();
  res.json(contacts);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsAPI.getContactById(contactId);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};

const add = async (req, res) => {
  const contact = await contactsAPI.addContact(req.body);
  res.status(201).json(contact);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsAPI.removeContact(contactId);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsAPI.updateContact(contactId, req.body);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};

const ctrl = {
  getAll: controlWrapper(getAll),
  getById: controlWrapper(getById),
  add: controlWrapper(add),
  deleteById: controlWrapper(deleteById),
  updateById: controlWrapper(updateById),
};

export default ctrl;