import { UserListInterface } from "../interface/userInterface";

const DisplayTable = ({ users }: UserListInterface) => {
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
              <>Edit</>
              <>Delete</>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayTable;
