import { UserInterface } from "../interface/userInterface";

interface tableProps {
  users: UserInterface[];
  handleEdit: (id: string) => void;
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
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button
                type="button"
                className="btn btn-rounded m-1 btn-sm btn-outline-dark"
                onClick={() => handleEdit(user.id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn m-1 btn-sm btn-outline-danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayTable;
