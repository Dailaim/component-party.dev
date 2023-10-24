import { component$ } from "@builder.io/qwik";
import { UserProfile } from "./UserProfile";

export const App = component$(() => {
  return (
    <UserProfile
      name="John"
      age={20}
      favoriteColors={["green", "blue", "red"]}
      isAvailable
    />
  );
});
