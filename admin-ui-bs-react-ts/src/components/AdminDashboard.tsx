import Header from "./Header";
import UserDashboard from "./UserDashboard";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <Header loginRegisterFlag={true} />
      <UserDashboard />
    </div>
  );
};

export default AdminDashboard;
