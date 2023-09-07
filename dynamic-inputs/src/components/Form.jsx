import { useState } from "react";
import FriendInput from "./Item";
import { SignleInputs } from "./Input";

const Form = () => {
  const [friendsList, setFriendsList] = useState([""]);
  const [info, setInfo] = useState({
    name: "",
    age: 0,
    email: "",
  });

  const handleFriendListChange = (event, index) => {
    const { value } = event.target;
    const list = [...friendsList];
    list[index] = value;
    setFriendsList(list);
  };

  const handleAddClick = () => {
    setFriendsList([...friendsList, ""]);
  };

  const handleRemoveInputField = (index) => {
    const list = [...friendsList];
    list.splice(index, 1);
    setFriendsList(list);
  };

  const handleInfo = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const detailInfo = {
      ...info,
      friends: friendsList,
    };
    console.log(detailInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <SignleInputs
        inputName={"name"}
        inputType={"text"}
        handleChange={handleInfo}
      />
      <SignleInputs
        inputName={"age"}
        inputType={"number"}
        handleChange={handleInfo}
      />
      <SignleInputs
        inputName={"email"}
        inputType={"email"}
        handleChange={handleInfo}
      />
      <div className="form__inputbox">
        <label htmlFor="friends" className="el-label">
          Your Friends Name
        </label>

        <FriendInput
          listOfFriends={friendsList}
          handleFriendInput={handleFriendListChange}
          removeInput={handleRemoveInputField}
        />

        <button onClick={handleAddClick} type="button" className="add__more">
          Add More
        </button>
      </div>
      <div className="form__buttonbox">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;

// {
//   friendsList.length !== 1 && (
//     <img src="/cancel.png" alt="Cancel mark" className="el-cancel" />
//   );
// }
