import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";

export const PageTitle = component$(() => {
  const pageTitle = useSignal("");

  useVisibleTask$(() => {
    pageTitle.value = document.title;
  });

  return <p>Page title: {pageTitle.value}</p>;
});
