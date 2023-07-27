import { useState, useEffect } from "react";
import { UserListInterface } from "../interface/userInterface";
import getUserList from "../api/getUserList";
import DisplayTable from "./DisplayTable";

const defaultUsers: UserListInterface = { users: [], filteredUsers: [] };

const Dashboard = () => {
  const [USERS, setUSERS] = useState(defaultUsers);
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
    setUSERS((users) => ({ ...users, filteredUsers: filteredUSERS }));
  };

  const handleEdit = (id: string) => {
    console.log("Edit clicked", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete clicked", id);
    const filteredUSERS = USERS.users.filter((user) => {
      return user.id !== id;
    });
    setUSERS({ users: filteredUSERS, filteredUsers: filteredUSERS });
  };

  useEffect(() => {
    // void to explicitly mark the promise as intentionally not awaited
    void getUserList({
      setUSERS,
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
        <DisplayTable
          users={USERS.filteredUsers}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    )
  );
};

export default Dashboard;
