import { useState } from "react";
import { UserInterface } from "../interface/userInterface";
import EditRow from "./EditRow";

interface rowProps {
  user: UserInterface;
  handleEdit: (editeUser: UserInterface) => void;
  handleDelete: (ids: string[]) => void;
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
          <i
            className="bi bi-pencil-square btn btn-sm btn-outline-warning border-0"
            onClick={() => setIsEediting(true)}
          ></i>
          <i
            className="bi bi-trash btn btn-sm btn-outline-danger border-0"
            onClick={() => handleDelete([user.id])}
          ></i>
        </td>
      </>
    );
  };

  return <>{showRow()}</>;
};

export default DsiplayRow;
