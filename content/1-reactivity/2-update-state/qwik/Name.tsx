import { component$, useSignal } from "@builder.io/qwik";

export const Name = component$(() => {
  const name = useSignal("John");
  name.value = "Jane";

  return <h1>Hello {name.value}</h1>;
});
