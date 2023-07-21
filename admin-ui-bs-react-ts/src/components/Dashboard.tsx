import { useState, useEffect } from "react";
import { UserListInterface } from "../interface/userInterface";
import getUserList from "../api/getUserList";
import DisplayTable from "./DisplayTable";

const defaultUsers: UserListInterface = { users: [] };

const Dashboard = () => {
  const [users, setUsers] = useState(defaultUsers);
  const [isLoading, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    void getUserList({ setUsers, setErrorMessage, setIsloading });
  }, []);

  return (
    (isLoading && "Loading Data") ||
    (errorMessage !== "" && errorMessage) || <DisplayTable users={users} />
  );
};

export default Dashboard;
