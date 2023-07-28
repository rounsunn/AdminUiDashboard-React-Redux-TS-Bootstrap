import { UserInterface } from "./userInterface";
import { setUserInterface } from "./setUserInterface";

interface handleSearchProps extends setUserInterface {
  searchEvent: React.FormEvent<HTMLInputElement>;
}

interface handleEditProps extends setUserInterface {
  editedUser: UserInterface;
}

interface handleDeleteProps extends setUserInterface {
  id: string;
}

export type { handleSearchProps, handleEditProps, handleDeleteProps };
