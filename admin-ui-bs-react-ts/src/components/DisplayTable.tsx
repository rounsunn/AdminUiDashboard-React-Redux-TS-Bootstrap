import { UserInterface } from "../interface/userInterface";
import { selectedUsersInterface } from "../interface/selectedUserInterface";
import DsiplayRow from "./DsiplayRow";

interface tableProps {
  users: UserInterface[];
  handleEdit: (editeUser: UserInterface) => void;
  handleDelete: (ids: string[]) => void;
  selectedUsers: selectedUsersInterface;
  setSelectedUsers: React.Dispatch<
    React.SetStateAction<selectedUsersInterface>
  >;
}

const DisplayTable = (props: tableProps) => {
  const { users, handleEdit, handleDelete, selectedUsers, setSelectedUsers } =
    props;

  const checkIdAndFlag = (curId = "") => {
    const a = [...selectedUsers.ids];
    let b = selectedUsers.allChecked;
    if (curId !== "") {
      if (a.includes(curId)) {
        const index = a.indexOf(curId);
        if (index > -1) {
          a.splice(index, 1);
        }
      } else a.push(curId);
    }
    b = true;
    users.forEach((user) => {
      if (!a.includes(user.id)) b = false;
    });
    if (selectedUsers.allChecked !== b || curId !== "")
      setSelectedUsers({ allChecked: b, ids: a });
  };

  checkIdAndFlag();

  const selectAll = () => {
    if (selectedUsers.allChecked)
      setSelectedUsers({ allChecked: false, ids: [] });
    else
      setSelectedUsers({ allChecked: true, ids: users.map((user) => user.id) });
  };

  const selectOne = (curId: string) => {
    checkIdAndFlag(curId);
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
                  checked={selectedUsers.allChecked}
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
              <tr key={user.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedUsers.ids.includes(user.id)}
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
