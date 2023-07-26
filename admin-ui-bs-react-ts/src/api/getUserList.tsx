import getInstance from "./api";
import { UserInterface, UserListInterface } from "../interface/userInterface";

interface setProps {
  setUSERS: React.Dispatch<React.SetStateAction<UserListInterface>>;
  setFilteredUsers: React.Dispatch<React.SetStateAction<UserListInterface>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
}

const getUserList = async ({
  setUSERS,
  setFilteredUsers,
  setErrorMessage,
  setIsloading,
}: setProps) => {
  console.log("gteuserList is called");
  try {
    const response = await getInstance<UserInterface[]>("");
    setUSERS({ users: response.data });
    setFilteredUsers({ users: response.data });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage("Unknown error occured");
    }
  } finally {
    console.log("getUserList executed");
    setIsloading(false);
  }
};

export default getUserList;
