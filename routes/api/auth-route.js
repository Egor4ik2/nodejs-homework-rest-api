import express from "express";

import {
  register,
  login,
  logout,
  getCurrent,
  updateSubscription,
} from "../../Controllers/user/index";
import { userSignupSchema, updateSubscriptionSchema } from "../../models/User.js";
import { validateBody } from "../../midwares/index";
import { controlWrapper } from "../../helper/index";
import { authenticate } from "../../midwares/index";

const authController = {
  register: controlWrapper(register),
  login: controlWrapper(login),
  logout: controlWrapper(logout),
  getCurrent: controlWrapper(getCurrent),
  updateSubscription: controlWrapper(updateSubscription),
};

const authRouter = express.Router();

const userSignupValidate = validateBody(userSignupSchema);
const updateSubscriptionValidate = validateBody(updateSubscriptionSchema);

authRouter.post("/register", userSignupValidate, authController.register);

authRouter.post("/login", userSignupValidate, authController.login);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

authRouter.patch("/", authenticate, updateSubscriptionValidate, authController.updateSubscription);

export default authRouter;