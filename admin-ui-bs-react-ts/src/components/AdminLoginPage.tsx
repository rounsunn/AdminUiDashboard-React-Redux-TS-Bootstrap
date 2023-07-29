import { Link } from "react-router-dom";
import Header from "./Header";

const AdminLoginPage = () => {
  return (
    <div className="container-fluid">
      <Header />
      <form className="my-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          <Link className="text-decoration-none text-reset" to={"/"}>
            Login
          </Link>
        </button>
      </form>
      <div className="mt-3 d-flex justify-content-between">
        <p>Didn't have an account?</p>
        <button className="btn btn-sm btn-primary">
          <Link className="text-decoration-none text-reset" to={"/register"}>
            Register
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
