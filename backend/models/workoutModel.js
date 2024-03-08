const mongoose = require("mongoose");

// invoke schema from mongoose
const Schema = mongoose.Schema;

// Create workout documents with schema
// Schema defines the structure of a particular document
// Pass in an object that defines the schema
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  //   Pass another object that logs timestamps everytime a document is created
  { timestamps: true }
);

// Create a model based on the schema
// A model applies the schema to a particular model

// Give the model a name. "Workout"
// Second argument, pass in the schema name
module.exports = mongoose.model("Workout", workoutSchema);

