import { Link } from "react-router-dom";

const textReset = "text-decoration-none text-reset";

const Header = () => {
  return (
    <div className="row">
      <div className="col p-0">
        <nav className="p-2 d-flex flex-wrap justify-content-between bg-dark text-white">
          <Link className={textReset} to={"/"}>
            <h4>Admin UI</h4>
          </Link>
          <Link className={textReset} to={"/login"}>
            Login
          </Link>
          <Link className={textReset} to={"/register"}>
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
