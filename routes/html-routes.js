const router = require("express").Router();
const path = require("path");

// all routest to existing HTML pages
// these pages will load their own JS files to become interactive or request information to build itself.

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;
