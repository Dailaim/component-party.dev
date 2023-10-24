import { QRL } from "@builder.io/qwik";

export type User = {
  id: number;
  username: string;
  email: string;
};

export type Store = {
  user: User;
  // eslint-disable-next-line no-unused-vars
  updateUsername: QRL<(newUsername: string) => void>;
};
