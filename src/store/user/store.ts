type User = {
  name?: string;
  email?: string;
  accessToken?: string;
  refreshToken?: string;
};

export type Store = User & {
  setUser: (user: User) => void;
};
