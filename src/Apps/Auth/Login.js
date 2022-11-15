import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import { authValidator } from "../../helpers/validators";

const Login = () => {
  const errorJson = {
    isFinalError: true,
    emailError: null,
    passwordError: null,
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState(errorJson);
  const history = useHistory();

  useEffect(() => {
    !error.isFinalError && authSubmitHandler();
  }, [error.isFinalError]);

  const validateAuthHandler = (event) => {
    event.preventDefault();
    console.log("Email :", email, "Password :", password);
    const validationError = authValidator(email, password?.toString());

    console.log("validation Result :", validationError);
    setError(validationError);
  };

  const authSubmitHandler = () => {
    console.log("Inside authSubmit handler :");
    history.push("/home");
  };

  return (
    <form className="form">
      <div className="email-input">
        <input
          placeholder="Type Your Email Here..."
          name="email"
          label="email"
          id="email"
          type="email"
          value={email}
          required={true}
          onChange={(event) => setEmail(event.target.value)}
        />
        {error.emailError && <span className="error">{error.emailError}</span>}
      </div>

      <div className="password-input">
        <input
          placeholder="Type Your Password Here..."
          name="password"
          label="password"
          id="password"
          type="number"
          value={password}
          required={true}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error.passwordError && (
          <span className="error">{error.passwordError}</span>
        )}
      </div>

      <button onClick={validateAuthHandler}>Login</button>
    </form>
  );
};

export default Login;
