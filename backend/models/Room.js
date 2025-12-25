const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    capacity: {
      type: Number,
      required: true,
      min: 1,
    },

    type: {
      type: String,
      enum: ["AC", "NON_AC"],
      required: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    // Students allocated to this room
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);
