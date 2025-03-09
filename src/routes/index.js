import express from "express";
import {AuthMiddleware} from '../middleware/authMiddleware.js'
import userController from "../controller/usersController.js";
import authController from "../controller/authController.js";

const router = express.Router();

router.use("/api",AuthMiddleware, userController);
router.use("/auth", authController);

export default router;
