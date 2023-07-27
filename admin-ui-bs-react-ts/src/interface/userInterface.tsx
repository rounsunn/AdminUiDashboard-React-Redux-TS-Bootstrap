interface UserInterface {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UserListInterface {
  users: UserInterface[];
  filteredUsers: UserInterface[];
}

export type { UserInterface, UserListInterface };
