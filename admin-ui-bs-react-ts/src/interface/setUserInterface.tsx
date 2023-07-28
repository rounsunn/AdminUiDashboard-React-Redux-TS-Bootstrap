import { UserListInterface } from "./userInterface";

interface setUserInterface {
  USERS: UserListInterface;
  setUSERS: React.Dispatch<React.SetStateAction<UserListInterface>>;
}

export type { setUserInterface };
