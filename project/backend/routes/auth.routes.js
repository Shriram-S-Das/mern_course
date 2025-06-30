import express from "express";

import { signup,login,logout } from "../controllers/auth.controllers.js";
const router = express.Router();
//signup
router.post("/signup",signup);
//login
router.post("/login",login);
//logout
router.get("/logout",logout);

export default router;