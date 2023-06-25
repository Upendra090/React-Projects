const courseController = require("../controllers/courseController");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(courseController.getCourse)
  .post(courseController.createCourse);

module.exports = router;
