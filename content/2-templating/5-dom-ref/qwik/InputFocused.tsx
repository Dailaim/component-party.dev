import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";

export const InputFocused = component$(() => {
  const inputElement = useSignal<HTMLInputElement>();

  useVisibleTask$(() => inputElement.value.focus());

  return <input type="text" ref={inputElement} />;
});
