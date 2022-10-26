const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const Port = process.env.Port || 5000;
const courses = require("./Data/courses.json");

app.get("/", (req, res) => {
  res.send("server running");
});
// get all courses
app.get("/allCourses", (req, res) => {
  res.send(courses);
});
// get a single course by id
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const getSingleCourse = courses?.find((course) => course.id == id);
  if (!getSingleCourse) {
    res.send("no course available for this id");
  }

  res.send(getSingleCourse);
});
