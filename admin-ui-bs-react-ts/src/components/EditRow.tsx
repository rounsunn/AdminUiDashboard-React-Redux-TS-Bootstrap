import { useState } from "react";
import { UserInterface } from "../interface/userInterface";

interface editFormProps {
  user: UserInterface;
  handleEdit: (user: UserInterface) => void;
  setIsEediting: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditRow = ({ user, handleEdit, setIsEediting }: editFormProps) => {
  const [formValues, setFormValues] = useState(user);

  const handleSubmit = () => {
    handleEdit(formValues);
    setIsEediting(false);
  };

  return (
    <>
      <td>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={formValues.name}
          onChange={(e) => {
            setFormValues({ ...formValues, name: e.target.value });
          }}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          placeholder="Role"
          value={formValues.role}
          onChange={(e) =>
            setFormValues({ ...formValues, role: e.target.value })
          }
        />
      </td>
      <td className="d-flex justify-content-center">
        <button className="btn m-1 btn-sm btn-success" onClick={handleSubmit}>
          Save
        </button>
      </td>
    </>
  );
};

export default EditRow;
