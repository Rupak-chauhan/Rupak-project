import {
    Link
  } from "react-router-dom";
  import '../App.css';

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <Link className="className" to="/login">Login</Link>
    </nav>
  );
};

export default NavigationBar;
