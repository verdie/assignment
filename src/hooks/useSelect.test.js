import { screen, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderHook } from "@testing-library/react-hooks";
import { useSelect } from "./useSelect";

const selectMaterialUiSelectOption = async (select, optionText) => {
  userEvent.click(select);
  const listbox = await within(document.body).findByRole("listbox");
  const listItem = await within(listbox).findByText(optionText);

  userEvent.click(listItem);
};

const setup = (disabled = false) => {
  const { result } = renderHook(() =>
    useSelect({
      options: ["t-1", "t-2", "t-3"],
      id: "test-id",
      label: "test-label",
      disabled,
    })
  );
  const [_, SelectComponent] = result.current;
  render(<>{SelectComponent}</>);
  const select = screen.getByRole("button");

  return {
    select,
    result,
  };
};

test("It should change value after selected", async () => {
  const { select, result } = setup();

  const [value0] = result.current;
  expect(value0).toBe("");

  await selectMaterialUiSelectOption(select, "t-1");

  const [value1] = result.current;
  expect(value1).toBe("t-1");

  await selectMaterialUiSelectOption(select, "t-2");

  const [value2] = result.current;
  expect(value2).toBe("t-2");
});
