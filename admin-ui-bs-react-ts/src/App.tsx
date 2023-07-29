import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import AdminDashboard from "./components/AdminDashboard";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminRegisterPage from "./components/AdminRegisterPage";

const adminDashboardRouter = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard />,
  },
  {
    path: "/login",
    element: <AdminLoginPage />,
  },
  {
    path: "/register",
    element: <AdminRegisterPage />,
  },
]);

function App() {
  return <RouterProvider router={adminDashboardRouter} />;
}

export default App;
