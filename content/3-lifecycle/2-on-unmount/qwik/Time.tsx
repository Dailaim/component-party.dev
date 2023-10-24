import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";

export const Time = component$(() => {
  const time = useSignal(new Date().toLocaleTimeString());

  useVisibleTask$(({ cleanup }) => {
    const timer = setInterval(() => {
      time.value = new Date().toLocaleTimeString();
    }, 1000);

    cleanup(() => clearInterval(timer));
  });

  return <p>Current time: {time.value}</p>;
});
