import { useState, useEffect } from "react";
import { UserInterface } from "../interface/userInterface";
import DsiplayRow from "./DsiplayRow";

interface tableProps {
  users: UserInterface[];
  handleEdit: (editeUser: UserInterface) => void;
  handleDelete: (ids: string[]) => void;
  selectedUsers: string[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<string[]>>;
}

const DisplayTable = (props: tableProps) => {
  const { users, handleEdit, handleDelete, selectedUsers, setSelectedUsers } =
    props;

  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    const checkIsAllChecked = () => {
      let flag = true;
      users.forEach((user) => {
        if (!selectedUsers.includes(user.id)) flag = false;
      });
      if (allChecked !== flag) setAllChecked(flag);
    };
    checkIsAllChecked();
  });

  const selectAll = () => {
    allChecked
      ? setSelectedUsers([])
      : setSelectedUsers(users.map((user) => user.id));
  };

  const selectOne = (curId: string) => {
    if (selectedUsers.includes(curId)) {
      const index = selectedUsers.indexOf(curId);
      if (index > -1) {
        selectedUsers.splice(index, 1);
      }
    } else selectedUsers.push(curId);
    // setSelectedUsers([...selectedUsers]);
  };

  return (
    <div className="row">
      <div className="col table-responsive p-0">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={selectAll}
                />
              </th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={
                  selectedUsers.includes(user.id) ? "table-active" : ""
                }
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => selectOne(user.id)}
                  />
                </td>
                <DsiplayRow
                  user={user}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayTable;
