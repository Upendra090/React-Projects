export default function Course(props) {
  {
    props.map((value, key) => {
      return (
        <div key={key} className="course">
          <div className="course__img"></div>
          <div className="course__details">
            <div className="course__textdetails">
              <span className="course__name">{value.name}</span>
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
      );
    });
  }
}
