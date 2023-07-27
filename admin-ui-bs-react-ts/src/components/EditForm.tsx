import { useState } from "react";
import { UserInterface } from "../interface/userInterface";
import { formStateInterface } from "../interface/formInterface";

interface editFormProps {
  user: UserInterface;
  handleEdit: (user: UserInterface) => void;
  setFormState: (value: React.SetStateAction<formStateInterface>) => void;
}

const EditForm = ({ user, handleEdit, setFormState }: editFormProps) => {
  const [formValues, setFormValues] = useState(user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEdit(formValues);
    setFormState({ showForm: false, user: formValues });
  };

  return (
    <form className="form-inline" id="editForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label> User Name: </label>
        <input
          type="text"
          placeholder="Name"
          value={formValues.name}
          onChange={(e) => {
            setFormValues({ ...formValues, name: e.target.value });
          }}
        ></input>
      </div>
      <div className="form-group">
        <label> User Email: </label>
        <input
          type="text"
          placeholder="Email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        ></input>
      </div>
      <div className="form-group">
        <label> User Role: </label>
        <input
          type="text"
          placeholder="Role"
          value={formValues.role}
          onChange={(e) =>
            setFormValues({ ...formValues, role: e.target.value })
          }
        ></input>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditForm;
