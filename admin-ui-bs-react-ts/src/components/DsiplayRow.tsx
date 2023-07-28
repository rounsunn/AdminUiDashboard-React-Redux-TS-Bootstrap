import { useState } from "react";
import { UserInterface } from "../interface/userInterface";
import EditRow from "./EditRow";

interface rowProps {
  user: UserInterface;
  handleEdit: (editeUser: UserInterface) => void;
  handleDelete: (id: string) => void;
}

const DsiplayRow = (props: rowProps) => {
  const { user, handleEdit, handleDelete } = props;
  const [isEditing, setIsEediting] = useState(false);

  const showRow = () => {
    return isEditing ? (
      <EditRow
        user={user}
        handleEdit={handleEdit}
        setIsEediting={setIsEediting}
      />
    ) : (
      <>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td className="d-flex flex-wrap justify-content-center pe-0">
          <button
            type="button"
            className="btn btn-rounded m-1 btn-sm btn-outline-dark"
            onClick={() => setIsEediting(true)}
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
      </>
    );
  };

  return (
    <>
      <td>
        <input type="checkbox" />
      </td>
      {showRow()}
    </>
  );
};

export default DsiplayRow;
