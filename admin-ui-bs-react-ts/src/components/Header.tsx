import { Link } from "react-router-dom";

const textReset = "text-decoration-none text-reset";
const textResetLogin = "text-decoration-none text-reset me-2";

const Header = () => {
  return (
    <div className="row">
      <div className="col p-0">
        <nav className="p-2 d-flex flex-wrap justify-content-between bg-dark text-white">
          <Link className={textReset} to={"/"}>
            <h4>Admin UI</h4>
          </Link>
          <div className="d-flex flex-wrap justify-contend-end">
            <Link className={textResetLogin} to={"/login"}>
              Login
            </Link>
            <Link className={textReset} to={"/register"}>
              Register
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
