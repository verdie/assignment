import ReactDOM from "react-dom";
import {
  fireEvent,
  screen,
  render,
  within,
  wait,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderHook, act } from "@testing-library/react-hooks";
import { useInput } from "./useInput";

// let container;
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });

// test("should be empty by default", () => {
//   const { result } = renderHook(() =>
//     useInput({ id: "test", label: "testlabel" })
//   );
//   const [value] = result.current;

//   expect(value).toBe("");
// });

// test("should be ", () => {
//   const { result } = renderHook(() =>
//     useInput({ id: "test", label: "testlabel" })
//   );
//   const [value, InputComponent] = result.current;
//   act(() => {
//     ReactDOM.render(<>{InputComponent}</>, container);
//   });
//   const input = container.querySelector("input#test");

//   fireEvent.change(input, { target: { value: "23" } });

//   expect(value).toBe("23");
// });

const setup = () => {
  const { result } = renderHook(() =>
    useInput({ id: "test", label: "testlabel" })
  );
  const [value, InputComponent] = result.current;
  const utils = render(<>{InputComponent}</>);
  const input = utils.getByPlaceholderText("testlabel");
  return {
    input,
    value,
    ...utils,
  };
};

test("It should keep a in front of the input", async () => {
  const { input, value } = setup();

  userEvent.type(input, "23");
  await waitFor(() => expect(value).toBe("23"));
});
