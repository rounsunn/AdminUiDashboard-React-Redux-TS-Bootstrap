import { useState, useEffect } from "react";
import { UserInterface, UserListInterface } from "../interface/userInterface";
import getUserList from "../api/getUserList";
import LoadingPage from "./LoadingPage";
import SearchBar from "./SearchBar";
import DisplayTable from "./DisplayTable";
import Pagination from "./Pagination";

const defaultUsers: UserListInterface = { allUsers: [], filteredUsers: [] };

const UserDashboard = () => {
  const [USERS, setUSERS] = useState(defaultUsers);
  const [isLoading, setIsloading] = useState({ flag: true, errorMessage: "" });
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

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
    void getUserList({ setUSERS, setIsloading });
  }, []);

  return isLoading.flag || isLoading.errorMessage !== "" ? (
    <LoadingPage isLoading={isLoading} />
  ) : (
    <>
      <SearchBar handleSearch={handleSearch} />
      <DisplayTable
        users={USERS.filteredUsers.slice(
          (currentPageNumber - 1) * 10,
          (currentPageNumber - 1) * 10 + 10
        )}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <Pagination
        totalUsers={USERS.filteredUsers.length}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
      />
    </>
  );
};

export default UserDashboard;
