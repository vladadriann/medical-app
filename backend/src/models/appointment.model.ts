import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: true,
  },
})

// Export the Appointment class to be used as TypeScript type
export class Appointment {
  @prop({ required: true })
  appointmentDate: string;

  @prop({ required: true })
  appointmentHour: string;

  @prop({ required: true })
  observations: string;

  @prop({ required: true })
  userId: string;

  @prop({ required: true })
  accepted: boolean;

  @prop({ required: true })
  doctorId: string;

  @prop({ required: false })
  doctorObservations: string;

  @prop({ required: false })
  doctorObservationsImage: string;

  @prop({ required: false })
  ObservationsImage: string;


}

const appointmentModel = getModelForClass(Appointment);
export default appointmentModel;
