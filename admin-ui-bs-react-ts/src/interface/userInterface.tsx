interface UserInterface {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UserListInterface {
  users: UserInterface[];
}

export type { UserInterface, UserListInterface };
