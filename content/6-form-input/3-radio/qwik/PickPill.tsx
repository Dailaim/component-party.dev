import { component$, useSignal, $ } from "@builder.io/qwik";

const PickPill = component$(() => {
  const picked = useSignal("red");

  const handleChange = $((_, Element) => {
    picked.value = Element.value;
  });

  return (
    <>
      <div>Picked: {picked.value}</div>
      <input
        id="blue-pill"
        checked={picked.value === "blue"}
        type="radio"
        value="blue"
        onChange$={handleChange}
      />
      <label for="blue-pill">Blue pill</label>

      <input
        id="red-pill"
        checked={picked.value === "red"}
        type="radio"
        value="red"
        onChange$={handleChange}
      />
      <label for="red-pill">Red pill</label>
    </>
  );
});

export default PickPill;
