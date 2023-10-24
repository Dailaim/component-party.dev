import {
  component$,
  useStore,
  useContextProvider,
  createContextId,
  $,
} from "@builder.io/qwik";
import { UserProfile } from "./UserProfile";
import { Store, User } from "./types";

export const UserContext = createContextId<Store>("user-context");

export const App = component$(() => {
  const user = useStore<User>({
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  });

  const updateUsername = $((newUsername) => {
    user.username = newUsername;
  });

  useContextProvider(UserContext, { user, updateUsername });

  return (
    <>
      <h1>Welcome back, {user.username}</h1>
      <UserProfile />
    </>
  );
});
