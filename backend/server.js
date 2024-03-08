// install dotenv package
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();


// middleware
// Let the request body will be passed to the request object
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", (req, res, next) => {
  // Set Content-Type header to indicate that the response will be in JSON format
  res.setHeader("Content-Type", "application/json");
  // Call the next middleware or route handler
  next();
}, workoutRoutes);

// connect to database
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `connected to database & listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => console.log(err));

// listen for requests
// app.listen(process.env.PORT, () => {
//   console.log(`listening to port ${process.env.PORT}`);
// });
