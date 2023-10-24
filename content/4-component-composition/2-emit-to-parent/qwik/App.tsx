import { $, component$, useSignal } from "@builder.io/qwik";
import { AnswerButton } from "./AnswerButton";

export const App = component$(() => {
  const isHappy = useSignal(true);

  const onAnswerNo = $(() => {
    isHappy.value = false;
  });

  const onAnswerYes = $(() => {
    isHappy.value = true;
  });

  return (
    <>
      <p>Are you happy?</p>
      <AnswerButton onYes$={onAnswerYes} onNo$={onAnswerNo} />
      <p style={{ fontSize: 50 }}>{isHappy.value ? "ðŸ˜€" : "ðŸ˜¥"}</p>
    </>
  );
});
