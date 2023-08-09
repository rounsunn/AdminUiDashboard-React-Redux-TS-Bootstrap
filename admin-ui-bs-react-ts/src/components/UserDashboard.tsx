import { useState, useEffect } from "react";
import { UserInterface, UserListInterface } from "../interface/userInterface";
import LoadingPage from "./LoadingPage";
import SearchBar from "./SearchBar";
import DisplayTable from "./DisplayTable";
import Pagination from "./Pagination";
import useFetch from "../api/useFetch";
import { baseURL } from "../api/api";

const delBtnClass = "btn rounded-pill btn-sm btn-outline-danger p-2";
const addBtnClass = "btn rounded-pill btn-sm btn-outline-warning p-2";
const defaultUsers: UserListInterface = { allUsers: [], filteredUsers: [] };

const UserDashboard = () => {
  const { isLoading, apiUserData, serverError } = useFetch(baseURL);
  const [USERS, setUSERS] = useState(defaultUsers);
  useEffect(() => {
    setUSERS({ allUsers: apiUserData, filteredUsers: apiUserData });
  }, [apiUserData]);

  const totalPages = Math.ceil(USERS.filteredUsers.length / 10);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  useEffect(() => {
    const newPageNumber = Math.max(1, totalPages);
    if (totalPages < currentPageNumber) setCurrentPageNumber(newPageNumber);
  }, [totalPages, currentPageNumber]);

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  function handleSearch(e: React.FormEvent<HTMLInputElement>) {
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
  }

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

  const handleDelete = (ids: string[] = selectedUsers) => {
    const finalAllUsers = USERS.allUsers.filter((user) => {
      let flag = true;
      ids.forEach((id) => {
        if (id === user.id) flag = false;
      });
      return flag;
    });
    const finalFileteredUsers = USERS.filteredUsers.filter((user) => {
      let flag = true;
      ids.forEach((id) => {
        if (id === user.id) flag = false;
      });
      return flag;
    });
    setUSERS({ allUsers: finalAllUsers, filteredUsers: finalFileteredUsers });
  };

  return isLoading || serverError !== "" ? (
    <LoadingPage flag={isLoading} errorMessage="serverError" />
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
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
      />
      <div className="row py-2 align-items-center">
        <div className="col">
          <button className={delBtnClass} onClick={() => handleDelete()}>
            Delete Selected
          </button>
        </div>
        <div className="col d-flex justify-content-end">
          <button className={addBtnClass} onClick={() => handleDelete()}>
            Add New
          </button>
        </div>
      </div>
      <div className="row py-2 align-items-center justify-content-end">
        <Pagination
          totalPages={totalPages}
          currentPageNumber={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
        />
      </div>
    </>
  );
};

export default UserDashboard;
