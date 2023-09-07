import { capitilize } from "../utils/utils";

export const SignleInputs = ({ inputName, inputType, handleChange }) => {
  return (
    <div className="form__inputbox">
      <label htmlFor={inputName} className="el-label">
        Your {capitilize(inputName)}
      </label>
      <input
        type={inputType}
        name={inputName}
        placeholder={"Enter your " + inputName}
        autoComplete="on"
        required
        id={inputName}
        onChange={handleChange}
      />
    </div>
  );
};
