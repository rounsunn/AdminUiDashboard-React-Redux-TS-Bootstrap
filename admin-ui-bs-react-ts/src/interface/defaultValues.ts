import { UserInterface, UserListInterface } from "./userInterface";

const defaultUser: UserInterface = {id:"", name:"", email:"", role:"",};
const defaultUsers: UserInterface[] = [];
const defaultUsersList: UserListInterface = { allUsers: [], filteredUsers: [] };

export {defaultUser, defaultUsers, defaultUsersList};
