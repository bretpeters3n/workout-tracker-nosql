const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      name: {
        type: String,
        trim: true,
        // required: "Workout name is required",
      },

      type: {
        type: String,
        trim: true,
        // required: "Workout type is required",
      },

      weight: {
        type: Number,
        trim: true,
        default: 0,
        // required: "Workout weight is required",
      },

      sets: {
        type: Number,
        trim: true,
        default: 0,
        // required: "Workout sets are required",
      },

      reps: {
        type: Number,
        trim: true,
        default: 0,
        // required: "Workout reps are required",
      },

      duration: {
        type: Number,
        default: 0,
        // trim: true,
        // required: "Workout duration is required",
      },

      distance: {
        type: Number,
        trim: true,
        default: 0,
        // required: "Workout distance is required",
      },
    },
  ],

  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
