import { QRL } from "@builder.io/qwik";

export type User = {
  id: number;
  username: string;
  email: string;
};

export type Store = {
  user: User;
  updateUsername: QRL<(newUsername: string) => void>;
};
