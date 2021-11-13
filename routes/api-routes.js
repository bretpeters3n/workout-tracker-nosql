const router = require("express").Router();
// const mongojs = require("mongojs");

const db = require("../models");

const path = require("path");

// these routes will be determined by the existing JS files in the PUBLIC folder

// get workouts
// GET /api/workouts/
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      dbWorkout.forEach((workout) => {
        var total = 0;
        workout.exercises.forEach((e) => {
          total += e.duration;
        });
        workout.totalDuration = total;
      });

      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add an exercise
// PUT /api/workouts/
router.put("/api/workouts/:id", (req, res) => {
  console.log("entered PUT /api/workouts");
  db.Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

// create a workout
// POST /api/workouts/
router.post("/api/workouts", (req, res) => {
  console.log("entered POST /api/workouts");
  db.Workout.create(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

// GET /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
  console.log("entered GET /api/workouts/range");
  db.Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
