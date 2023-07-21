import getInstance from "./api";

interface userList {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface setProps {
  setUsers: React.Dispatch<React.SetStateAction<userList[]>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultUsers: userList[] = [];

const getUserList = async ({
  setUsers,
  setErrorMessage,
  setIsloading,
}: setProps) => {
  console.log("gteuserList is called");
  try {
    const response = await getInstance<userList[]>("");
    setUsers(response.data);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage("Unknown error occured");
    }
  } finally {
    console.log("fetchuserList executed");
    setIsloading(false);
  }
};

export { defaultUsers, getUserList };
