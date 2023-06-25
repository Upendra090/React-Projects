import { useState } from "react";
import "./App.css";

function App() {
  const [activeContent, setActiveContent] = useState(1);

  const handleButtonClick = (id) => {
    setActiveContent(id);
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
            onClick={() => handleButtonClick(1)}
          >
            Add New Course
          </button>
          <button
            className={`${activeContent === 2 ? "active" : ""}`}
            onClick={() => handleButtonClick(2)}
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
            />
            <label htmlFor="instructor">Course Instructor</label>
            <input
              type="text"
              placeholder="Enter Instructor Name"
              className="inputbox"
              name="instructor"
              required
            />
            <label htmlFor="duration">Course Duration</label>
            <input
              type="number"
              placeholder="Enter Course Duration"
              className="inputbox"
              name="duration"
              required
            />
            <label htmlFor="price">Course Price</label>
            <input
              type="number"
              placeholder="Enter Course Price"
              className="inputbox"
              name="price"
              required
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
            />
            <button className="addbtn">Add Course</button>
          </div>
        </div>

        <div
          className="all__courses"
          style={{ display: activeContent === 2 ? "grid" : "none" }}
        >
          <div className="course">
            <div className="course__img"></div>
            <div className="course__details">
              <div className="course__textdetails">
                <span className="course__name">React Course</span>
                <span className="course__instructor">Upendra Kumar</span>
              </div>
              <div className="course__numdetails">
                <span className="course__duration">Duration 45 Hours</span>
                <span className="course__price">Price 999</span>
              </div>
              <p className="course__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, optio iste tempore error aut modi, cum repudiandae
                dolores eveniet totam pariatur. Unde, laudantium mollitia eaque
                quod dolore alias. Doloremque, repellat.
              </p>
            </div>
          </div>
          <div className="course">
            <div className="course__img"></div>
            <div className="course__details">
              <div className="course__textdetails">
                <span className="course__name">React Course</span>
                <span className="course__instructor">Upendra Kumar</span>
              </div>
              <div className="course__numdetails">
                <span className="course__duration">Duration 45 Hours</span>
                <span className="course__price">Price 999</span>
              </div>
              <p className="course__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, optio iste tempore error aut modi, cum repudiandae
                dolores eveniet totam pariatur. Unde, laudantium mollitia eaque
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="course">
            <div className="course__img"></div>
            <div className="course__details">
              <div className="course__textdetails">
                <span className="course__name">React Course</span>
                <span className="course__instructor">Upendra Kumar</span>
              </div>
              <div className="course__numdetails">
                <span className="course__duration">Duration 45 Hours</span>
                <span className="course__price">Price 999</span>
              </div>
              <p className="course__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, optio iste tempore error aut modi, cum repudiandae
                dolores eveniet totam pariatur. Unde, laudantium mollitia eaque
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
