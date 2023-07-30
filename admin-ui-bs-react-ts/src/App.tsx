import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import AdminDashboard from "./components/AdminDashboard";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminRegisterPage from "./components/AdminRegisterPage";

// const baseUrl = "https://admin-ui-dashboard-rounsunn.netlify.app";
const baseUrl = "";

const adminDashboardRouter = createBrowserRouter([
  { path: baseUrl + "/", element: <AdminDashboard /> },
  { path: baseUrl + "/login", element: <AdminLoginPage /> },
  { path: baseUrl + "/register", element: <AdminRegisterPage /> },
]);

function App() {
  return <RouterProvider router={adminDashboardRouter} />;
}

export default App;
