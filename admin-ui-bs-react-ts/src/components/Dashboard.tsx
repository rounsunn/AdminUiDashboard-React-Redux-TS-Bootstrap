import { useState, useEffect } from "react";

interface usersList {
  id: string;
  name: string;
  email: string;
  role: string;
}

const defaultUsers: usersList[] = [];

const Dashboard = () => {
  const [users, setUsers] = useState(defaultUsers);

  const showUsers = () => {
    console.log("Show users called: ", users);
    return users.map((user) => (
      <div key={user.id}>
        <>{user.id}</>
        <>{user.name}</>
        <>{user.email}</>
        <>{user.role}</>
      </div>
    ));
  };

  useEffect(() => {
    console.log("fetchUsersList is called");
    const config = {
      method: "get",
      url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
    };
    const getUsersList = async () => {
      try {
        const response = await fetch(config.url);
        console.log(response);
        const data = (await response.json()) as usersList[];
        console.log(data);
        setUsers(data);
        // console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    void getUsersList();
  }, []);

  return <div>{showUsers()}</div>;
};

export default Dashboard;
