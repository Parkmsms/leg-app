type User = {
  name?: string;
  email?: string;
  accessToken?: string;
  refreshToken?: string;
};

export type Store = User & {
  setUser: (user: User) => Promise<void>; // 임시
  login: (accessToken: string, refreshToken: string) => Promise<void>;
  logout: () => Promise<void>;
};
