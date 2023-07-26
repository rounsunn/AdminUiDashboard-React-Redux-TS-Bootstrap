import { useState, useEffect } from "react";
import { UserListInterface } from "../interface/userInterface";
import getUserList from "../api/getUserList";
import DisplayTable from "./DisplayTable";

const defaultUsers: UserListInterface = { users: [] };

const Dashboard = () => {
  const [USERS, setUSERS] = useState(defaultUsers);
  const [filteredUsers, setFilteredUsers] = useState(defaultUsers);
  const [isLoading, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e);
    console.log("handleSearch");
    let searchText: string;
    if (e.target instanceof HTMLInputElement) searchText = e.target.value;
    const filteredUSERS = USERS.users.filter((user) => {
      return (
        user.name.includes(searchText) ||
        user.email.includes(searchText) ||
        user.role.includes(searchText)
      );
    });
    setFilteredUsers({ users: filteredUSERS });
  };

  useEffect(() => {
    void getUserList({
      setUSERS,
      setFilteredUsers,
      setErrorMessage,
      setIsloading,
    });
  }, []);

  return (
    (isLoading && "Loading Data") ||
    (errorMessage !== "" && errorMessage) || (
      <div>
        <input
          type="text"
          className="input-group"
          placeholder="search"
          onChange={handleSearch}
        />
        <DisplayTable users={filteredUsers.users} />
      </div>
    )
  );
};

export default Dashboard;
