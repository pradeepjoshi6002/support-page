import "./styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar-cont">
      <img className="navbar-logo" src={logo} alt="" />
    </div>
  );
}
