const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/categories.json');
const courses    = require('./data/courses.json');

app.get('/categories', (req, res)=>{
  res.send(categories);
})

app.get('/courses', (req, res)=>{
  res.send(courses);
})

app.listen(port, () => {
  console.log("Tech Learner Server running on port", port);
});