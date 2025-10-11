import express from "express"

// Controllers
import { createUser,  getAllUsers,  loginUser, logoutCurrentUser } from "../controllers/userController.js";

// Middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router= express.Router();

router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post("/auth",loginUser);
router.post("/logout", logoutCurrentUser)

export default router;