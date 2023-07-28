import { UserInterface } from "../interface/userInterface";
import DsiplayRow from "./DsiplayRow";

interface tableProps {
  users: UserInterface[];
  handleEdit: (editeUser: UserInterface) => void;
  handleDelete: (id: string) => void;
}

const DisplayTable = (props: tableProps) => {
  const { users, handleEdit, handleDelete } = props;

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" />
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
            <DsiplayRow
              user={user}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayTable;
