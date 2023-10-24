import { component$ } from "@builder.io/qwik";

type Props = {
  name: string;
  age?: number;
  favoriteColors: string[];
  isAvailable: boolean;
};

export const UserProfile = component$<Props>(
  ({ name = "", age = null, favoriteColors = [], isAvailable = false }) => {
    return (
      <>
        <p>My name is {name}!</p>
        <p>My age is {age}!</p>
        <p>My favourite colors are {favoriteColors.join(", ")}!</p>
        <p>I am {isAvailable ? "available" : "not available"}</p>
      </>
    );
  }
);
