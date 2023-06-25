const Course = require("../db/dbConnection");

exports.getCourse = (req, res) => {
  Course.query("SELECT * FROM courses", (err, result) => {
    if (err) {
      return res.status(404).json({
        status: "fail",
        message: "SOME ERROR OCCURED!",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: "success",
        message: "Here is all your courses!",
        docs: result,
      });
    }
  });
};

exports.createCourse = (req, res) => {
  const { name, instructor, duration, price, description } = req.body;
  Course.query(
    "INSERT INTO courses (name, instructor, duration, price, description) VALUES (?, ?, ?, ?, ?)",
    [name, instructor, duration, price, description],
    (err, result) => {
      if (err) {
        return res.status(400).json({
          status: "fail",
          message: "SOME ERROR OCCURED!",
          error: err,
        });
      } else {
        return res.status(201).json({
          status: "success",
          message: "VALUES INSERTED",
          docs: result,
        });
      }
    }
  );
};
