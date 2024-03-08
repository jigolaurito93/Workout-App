const express = require("express");
const Workout = require("../models/workoutModel");

// Invoke the express router
const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get a single workout" });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    // pass through the new document we want to create
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

  res.json({ mssg: "POST a new workout" });
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

module.exports = router;
