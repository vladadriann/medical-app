import express from "express";
import {
  getAllUsersHandler,
  getMeHandler,
  getAllDoctorsHandler,
  deleteUserHandler
} from "../controllers/user.controller";
import { deserializeUser } from "../middleware/deserialize-user";
import { requireUser } from "../middleware/require-user";
import { restrictTo } from "../middleware/restrict-to";

const router = express.Router();
router.use(deserializeUser, requireUser);

// Admin Get Users route
router.get("/", restrictTo("admin"), getAllUsersHandler);

// Get my info route
router.get("/me", getMeHandler);

//Get all doctors

router.get("/doctors", getAllDoctorsHandler);

//Delete user

router.post("/delete",restrictTo("admin"), deleteUserHandler);

export default router;
