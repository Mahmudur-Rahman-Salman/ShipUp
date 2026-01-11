import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  pickup: { type: String, required: true },
  dropoff: { type: String, required: true },
  packageType: { type: String, required: true },
  price: { type: Number, required: true },

  customerName: { type: String, required: true },
  customerEmail: { type: String },
  customerPhone: { type: String, required: true },

  userEmail: { type: String },

  trackingId: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },

  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Booking", bookingSchema);
