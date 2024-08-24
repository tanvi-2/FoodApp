import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "First name must be at least 3 characters long."],
    maxlength: [30, "First name cannot exceed 30 characters."],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "Last name must be at least 3 characters long."],
    maxlength: [30, "Last name cannot exceed 30 characters."],
  },
  date: {
    type: Date, // Use Date type if storing date objects
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email address."],
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^\d{11}$/.test(v),
      message: "Phone number must contain exactly 11 digits.",
    },
  },
});

export const Reservation = mongoose.model('Reservation', reservationSchema);
