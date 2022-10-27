const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  const category_courses = courses.filter((n) => n.category_id === id);
  console.log(category_courses);
  res.send(category_courses);
});

app.listen(port, () => {
  console.log("Tech Learner Server running on port", port);
});
