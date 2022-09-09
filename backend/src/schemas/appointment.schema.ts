import { object, string, TypeOf } from "zod";

export const appointmentSchema = object({
  body: object({
    appointmentDate: string({ required_error: "Appointment date is required" }),
    appointmentHour: string({ required_error: "Appointment hour is required" }),
    observations: string({ required_error: "Observations are required" }),
    doctorId: string ({ required_error: "Doctor Id is required" })
  }),
});

export type CreateAppointmentInput = TypeOf<typeof appointmentSchema>["body"];
