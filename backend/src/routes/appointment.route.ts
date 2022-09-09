import express from "express";
import { appointmentHandler, getAllAppointmentsHandler, updateAppointmentHandler } from "../controllers/appointment.controller";
import { requireUser } from "../middleware/require-user";
import { validate } from "../middleware/validate";
import { appointmentSchema } from "../schemas/appointment.schema";
import { deserializeUser } from "../middleware/deserialize-user";

const router = express.Router();
router.use(deserializeUser, requireUser);

// Register user route
router.post("/create", validate(appointmentSchema), appointmentHandler);

router.get("/all", getAllAppointmentsHandler);

router.post("/update", updateAppointmentHandler)

export default router;
