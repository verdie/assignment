import React from "react";
import { render, fireEvent, within, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CarForm from "./CarFrom";

jest.mock("../../hooks/useCarsData", () => ({
  useGetBrands: () => [["test-brand-1", "test-brand-2"]],
  useGetModels: () => [["test-model-1", "test-model-2"]],
}));

test("submit button disabled by default", () => {
  render(<CarForm />);
  fireEvent.click(screen.getByText("Search cars"));

  expect(screen.getByText("Search cars")).toBeDisabled();
});

test("submit button is enabled after keywords field is filled in", () => {
  const { getByText, getByPlaceholderText } = render(<CarForm />);
  const keywordsInput = getByPlaceholderText("Keywords");

  fireEvent.change(keywordsInput, {
    target: {
      value: "france",
    },
  });

  const submitButton = getByText("Search cars");
  expect(submitButton).not.toHaveAttribute("disabled");
});

test("submit button is enabled after brand field is filled in", async () => {
  const { getByText, getAllByRole } = render(<CarForm />);
  const brandsSelect = getAllByRole("button")[0];

  userEvent.click(brandsSelect);
  const listbox = await within(document.body).findAllByRole("listbox");
  const listItem = await within(listbox[0]).findByText("test-brand-1");

  userEvent.click(listItem);

  const submitButton = getByText("Search cars");
  expect(submitButton).not.toHaveAttribute("disabled");
});

test("model select is disabled by default", async () => {
  const { container } = render(<CarForm />);

  const modelsSelect = container.querySelectorAll(".MuiSelect-nativeInput")[1];
  expect(modelsSelect).toHaveAttribute("disabled");
});

test("submit button is enabled after model field is filled in", async () => {
  const { getAllByRole, container } = render(<CarForm />);
  const brandsSelect = getAllByRole("button")[0];

  userEvent.click(brandsSelect);
  const listbox = await within(document.body).findAllByRole("listbox");
  const listItem = await within(listbox[0]).findByText("test-brand-1");

  userEvent.click(listItem);

  const modelsSelect = container.querySelectorAll(".MuiSelect-nativeInput")[1];
  expect(modelsSelect).not.toHaveAttribute("disabled");
});
