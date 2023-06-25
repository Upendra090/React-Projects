import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [activeContent, setActiveContent] = useState(1);
  const [name, setName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [courseList, setCourseList] = useState([]);

  const handleButtonClick = (id) => {
    setActiveContent(id);
  };

  const addCourse = () => {
    axios
      .post("http://127.0.0.1:3000/", {
        name,
        instructor,
        duration,
        price,
        description,
      })
      .then(() => {
        alert("Course Added To Database");
      });
  };

  const getCourses = () => {
    axios
      .get("http://127.0.0.1:3000/")
      .then((response) => {
        setCourseList(response.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="app">
        <div className="app__title">
          <h3>Course Management System</h3>
        </div>

        <div className="handle__content--btn">
          <button
            className={`${activeContent === 1 ? "active" : ""}`}
            onClick={() => {
              handleButtonClick(1);
            }}
          >
            Add New Course
          </button>
          <button
            className={`${activeContent === 2 ? "active" : ""}`}
            onClick={() => {
              handleButtonClick(2);
              getCourses();
            }}
          >
            Show All Course
          </button>
        </div>

        <div
          className="create__course"
          style={{ display: activeContent === 1 ? "block" : "none" }}
        >
          <div className="course__form">
            <label htmlFor="title">Course Name</label>
            <input
              type="text"
              placeholder="Enter Course Name"
              className="inputbox"
              name="title"
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label htmlFor="instructor">Course Instructor</label>
            <input
              type="text"
              placeholder="Enter Instructor Name"
              className="inputbox"
              name="instructor"
              required
              onChange={(event) => {
                setInstructor(event.target.value);
              }}
            />
            <label htmlFor="duration">Course Duration</label>
            <input
              type="number"
              placeholder="Enter Course Duration"
              className="inputbox"
              name="duration"
              required
              onChange={(event) => {
                setDuration(event.target.value);
              }}
            />
            <label htmlFor="price">Course Price</label>
            <input
              type="number"
              placeholder="Enter Course Price"
              className="inputbox"
              name="price"
              required
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <label htmlFor="description">Course Description</label>
            <textarea
              placeholder="Enter Course Description"
              className="textarea"
              name="description"
              maxLength={200}
              cols={50}
              rows={20}
              required
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <button onClick={addCourse} className="addbtn">
              Add Course
            </button>
          </div>
        </div>

        <div
          className="all__courses"
          style={{ display: activeContent === 2 ? "grid" : "none" }}
        >
          {courseList.map((value, key) => {
            return (
              <div key={key} className="course">
                <div className="course__img"></div>
                <div className="course__details">
                  <div className="course__textdetails">
                    <span className="course__name">{value.name}</span>
                    <span className="course__instructor">
                      {value.instructor}
                    </span>
                  </div>
                  <div className="course__numdetails">
                    <span className="course__duration">
                      Duration: {value.duration} Hours
                    </span>
                    <span className="course__price">Price: ₹{value.price}</span>
                  </div>
                  <p className="course__description">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

//
