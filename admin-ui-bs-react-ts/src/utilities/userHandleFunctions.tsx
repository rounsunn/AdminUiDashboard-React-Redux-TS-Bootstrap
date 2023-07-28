import {
  handleSearchProps,
  handleEditProps,
  handleDeleteProps,
} from "../interface/userHandleFunctionInterface";

const handleSearch = (props: handleSearchProps) => {
  const { searchEvent, USERS, setUSERS } = props;
  console.log(searchEvent);
  let searchText: string;
  if (searchEvent.target instanceof HTMLInputElement)
    searchText = searchEvent.target.value;
  const filteredUsers = USERS.allUsers.filter((user) => {
    return (
      user.name.includes(searchText) ||
      user.email.includes(searchText) ||
      user.role.includes(searchText)
    );
  });
  setUSERS((users) => ({ ...users, filteredUsers: filteredUsers }));
};

const handleEdit = (props: handleEditProps) => {
  const { editedUser, USERS, setUSERS } = props;
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

const handleDelete = (props: handleDeleteProps) => {
  const { id, USERS, setUSERS } = props;
  const finalAllUsers = USERS.allUsers.filter((user) => {
    return user.id !== id;
  });
  const finalFileteredUsers = USERS.filteredUsers.filter((user) => {
    return user.id !== id;
  });
  setUSERS({ allUsers: finalAllUsers, filteredUsers: finalFileteredUsers });
};

export { handleSearch, handleEdit, handleDelete };
