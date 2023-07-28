import UserDashboard from "./UserDashboard";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-0">
          <nav className="p-2 bg-dark">
            <h2 className="text-white m-0">Admin UI</h2>
          </nav>
        </div>
      </div>
      <UserDashboard />
    </div>
  );
};

export default AdminDashboard;
