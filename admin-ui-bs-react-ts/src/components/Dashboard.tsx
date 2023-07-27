import { useState, useEffect } from "react";
import { UserInterface, UserListInterface } from "../interface/userInterface";
import getUserList from "../api/getUserList";
import DisplayTable from "./DisplayTable";

const defaultUsers: UserListInterface = { allUsers: [], filteredUsers: [] };

const Dashboard = () => {
  const [USERS, setUSERS] = useState(defaultUsers);
  const [isLoading, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e);
    let searchText: string;
    if (e.target instanceof HTMLInputElement) searchText = e.target.value;
    const filteredUsers = USERS.allUsers.filter((user) => {
      return (
        user.name.includes(searchText) ||
        user.email.includes(searchText) ||
        user.role.includes(searchText)
      );
    });
    setUSERS((users) => ({ ...users, filteredUsers: filteredUsers }));
  };

  const handleEdit = (editedUser: UserInterface) => {
    const editedAllUsers = USERS.allUsers.map((user) => {
      if (user.id === editedUser.id) user = editedUser;
      return user;
    });
    const editedFilteredUsers = USERS.filteredUsers.map((user) => {
      if (user.id === editedUser.id) user = editedUser;
      return user;
    });
    setUSERS({ allUsers: editedAllUsers, filteredUsers: editedFilteredUsers });
  };

  const handleDelete = (id: string) => {
    const finalAllUsers = USERS.allUsers.filter((user) => {
      return user.id !== id;
    });
    const finalFileteredUsers = USERS.filteredUsers.filter((user) => {
      return user.id !== id;
    });
    setUSERS({ allUsers: finalAllUsers, filteredUsers: finalFileteredUsers });
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
