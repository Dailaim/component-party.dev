import { component$, useSignal } from "@builder.io/qwik";

const InputHello = component$(() => {
  const text = useSignal("");

  return (
    <>
      <p>{text.value}</p>
      <input type="text" bind:value={text} />
    </>
  );
});

export default InputHello;
