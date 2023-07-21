import getInstance from "./api";
import { UserListInterface } from "../interface/userInterface";

interface setProps {
  setUsers: React.Dispatch<React.SetStateAction<UserListInterface>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
}

const getUserList = async ({
  setUsers,
  setErrorMessage,
  setIsloading,
}: setProps) => {
  console.log("gteuserList is called");
  try {
    const response = await getInstance<UserListInterface>("");
    setUsers(response.data);
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
