import { component$ } from "@builder.io/qwik";
import { FunnyButton } from "./FunnyButton";

export const App = component$(() => {
  return <FunnyButton>Click me!</FunnyButton>;
});
