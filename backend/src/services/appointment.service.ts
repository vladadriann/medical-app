
import { omit, get } from "lodash";
import { excludedFields } from "../controllers/auth.controller";
import appointmentModel, { Appointment } from "../models/appointment.model";

// Create Appointment service
export const createAppointment = async (input: Partial<Appointment>) => {
  const appointment = await appointmentModel.create(input);
  return omit(appointment.toJSON(), excludedFields);
};

export const updateAppointment = async (id: string, query: any) => {
  const appointment= await appointmentModel.findOneAndUpdate({ _id: id}, query, {returnDocument: "after"})
  return appointment
}

// Find Appointment by Id
export const findAppointmentById = async (id: string) => {
  const appointment = await appointmentModel.findById(id).lean();
  return omit(appointment, excludedFields);
};

// Find All user Appointments
export const findAllUserAppointments = async () => {
  return await appointmentModel.find();
};
