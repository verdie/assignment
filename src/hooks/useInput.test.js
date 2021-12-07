import { screen, render, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useInput } from "./useInput";

const setup = () => {
  const { result } = renderHook(() =>
    useInput({ id: "test", label: "testlabel" })
  );
  const [_, InputComponent] = result.current;
  render(<>{InputComponent}</>);
  const input = screen.getByRole("textbox");

  return {
    input,
    result,
  };
};

test("It should be empty be default", () => {
  const { result } = setup();

  const [value] = result.current;
  expect(value).toBe("");
});

test("It should change the value", () => {
  const { input, result } = setup();
  fireEvent.change(input, {
    target: {
      value: "france",
    },
  });

  const [value] = result.current;
  expect(value).toBe("france");
});
