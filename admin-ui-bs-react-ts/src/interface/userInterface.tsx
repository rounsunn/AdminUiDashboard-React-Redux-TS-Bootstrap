interface UserInterface {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UserListInterface {
  allUsers: UserInterface[];
  filteredUsers: UserInterface[];
}

export type { UserInterface, UserListInterface };
