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

  useEffect(() => {
    console.log("fetchUsersList is called");
    const config = {
      method: "get",
      url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
    };
    fetch(config.url)
      .then((response) => {
        console.log(response.json());
        // return response.json();
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>{"users"}</div>;
};

export default Dashboard;
