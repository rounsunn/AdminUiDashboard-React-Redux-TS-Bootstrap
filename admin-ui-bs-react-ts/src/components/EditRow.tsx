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
          placeholder="Role"
          value={formValues.role}
          onChange={(e) =>
            setFormValues({ ...formValues, role: e.target.value })
          }
        />
      </td>
      <td>
        <button onClick={handleSubmit}>Save</button>
      </td>
    </>
  );
};

export default EditRow;
