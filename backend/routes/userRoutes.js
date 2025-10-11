import express from "express"

// Controllers
import { createUser, loginUser, logoutCurrentUser } from "../controllers/userController.js";
// Middlewares
const router= express.Router();

router.route("/").post(createUser);
router.post("/auth",loginUser);
router.post("/logout", logoutCurrentUser)

export default router;