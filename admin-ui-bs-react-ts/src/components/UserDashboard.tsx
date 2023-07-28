import { useState, useEffect } from "react";
import { UserInterface, UserListInterface } from "../interface/userInterface";
import { selectedUsersInterface } from "../interface/selectedUserInterface";
import getUserList from "../api/getUserList";
import LoadingPage from "./LoadingPage";
import SearchBar from "./SearchBar";
import DisplayTable from "./DisplayTable";
import Pagination from "./Pagination";

const delBtnClass = "btn rounded-pill btn-sm btn-danger p-2";
const defaultUsers: UserListInterface = { allUsers: [], filteredUsers: [] };

const defaultSelectedUsers: selectedUsersInterface = {
  ids: [],
  allChecked: false,
};

const UserDashboard = () => {
  const [USERS, setUSERS] = useState(defaultUsers);
  const [isLoading, setIsloading] = useState({ flag: true, errorMessage: "" });
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState(defaultSelectedUsers);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
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

  const handleDelete = (ids: string[] = selectedUsers.ids) => {
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
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
      />
      <div className="row py-2">
        <div className="col-4">
          <button className={delBtnClass} onClick={() => handleDelete()}>
            Delete Selected
          </button>
        </div>
        <Pagination
          totalUsers={USERS.filteredUsers.length}
          currentPageNumber={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
        />
      </div>
    </>
  );
};

export default UserDashboard;
