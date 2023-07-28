import getInstance from "./api";
import { UserInterface, UserListInterface } from "../interface/userInterface";

interface setProps {
  setUSERS: React.Dispatch<React.SetStateAction<UserListInterface>>;
  setIsloading: React.Dispatch<
    React.SetStateAction<{
      flag: boolean;
      errorMessage: string;
    }>
  >;
}

const getUserList = async ({ setUSERS, setIsloading }: setProps) => {
  try {
    const response = await getInstance<UserInterface[]>("");
    setUSERS({ allUsers: response.data, filteredUsers: response.data });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      setIsloading({ flag: false, errorMessage: error.message });
    } else {
      setIsloading({ flag: false, errorMessage: "Unknown error occured" });
    }
  } finally {
    setIsloading({ flag: false, errorMessage: "" });
  }
};

export default getUserList;
