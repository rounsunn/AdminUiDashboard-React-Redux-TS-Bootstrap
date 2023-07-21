import { useState, useEffect } from "react";
import { defaultUsers, getUserList } from "../api/getuserList";

const Dashboard = () => {
  const [users, setUsers] = useState(defaultUsers);
  const [isLoading, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const showUsers = () => {
    console.log("Show users called: ");
    return users.map((user) => (
      <li key={user.id}>
        <>{user.id}</>
        <>{user.name}</>
        <>{user.email}</>
        <>{user.role}</>
      </li>
    ));
  };

  useEffect(() => {
    void getUserList({ setUsers, setErrorMessage, setIsloading });
  }, []);

  return (
    (isLoading && "Loading Data") ||
    (errorMessage !== "" && errorMessage) || <div>{showUsers()}</div>
  );
};

export default Dashboard;
