import getInstance from "./api";

interface usersList {
  id: string;
  name: string;
  email: string;
  role: string;
}

const defaultUsers: usersList[] = [];

const getUserList = async () => {
  const response = await getInstance<usersList[]>("");
  return response.data;
};

export { defaultUsers, getUserList };
