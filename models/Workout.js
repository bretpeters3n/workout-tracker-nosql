const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// {
//   "_id" : ObjectId("618dbbca7140fe78317487fd"),
//   "day" : ISODate("2021-11-06T23:56:42.717Z"),
//   "exercises" : [
//       {
//           "type" : "resistance",
//           "name" : "Bench Press",
//           "duration" : 20,
//           "weight" : 285,
//           "reps" : 10,
//           "sets" : 4
//       }
//   ]
// }

// I should also be able to track the name, type, weight, sets, reps, and
// duration of exercise. If the exercise is a cardio exercise, I should be able
// to track my distance traveled.

// Name, Type, Weight, Sets, Reps, Duration, Distance

const WorkoutSchema = new Schema({
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

  // Unused examples vv
  // boolean: Boolean,
  // array: Array,
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
