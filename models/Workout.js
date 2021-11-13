const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },

  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Workout name is required",
      },

      type: {
        type: String,
        trim: true,
        required: "Workout type is required",
      },

      weight: {
        type: Number,
        trim: true,
        required: "Workout weight is required",
      },

      sets: {
        type: Number,
        trim: true,
        required: "Workout sets are required",
      },

      reps: {
        type: Number,
        trim: true,
        required: "Workout reps are required",
      },

      duration: {
        type: Number,
        trim: true,
        required: "Workout duration is required",
      },

      distance: {
        type: Number,
        trim: true,
        required: "Workout distance is required",
      },
    },
  ],

  // totalDuration: {
  //   type: Number,
  // },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
