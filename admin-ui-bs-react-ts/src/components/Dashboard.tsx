import { useState, useEffect } from "react";
import getInstance from "../api/api";

interface usersList {
  id: string;
  name: string;
  email: string;
  role: string;
}

const defaultUsers: usersList[] = [];

const Dashboard = () => {
  const [users, setUsers] = useState(defaultUsers);

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
    console.log("fetchUsersList is called");
    const getUsersList = async () => {
      try {
        const response = await getInstance<usersList[]>("");
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    void getUsersList();
  }, []);

  return <div>{showUsers()}</div>;
};

export default Dashboard;
