import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberInput from "../components/NumberInput";

const testMessage = "Test Input Label";

test("Test number input - number input should show up as expect.", () => {
  render(
    <NumberInput label={testMessage} data-testid="number-input-component" />
  );
  expect(screen.getByTestId("number-input-component")).toBeVisible();
});

test("Test label in number input - label of number input should show up as expect.", () => {
  render(
    <NumberInput label={testMessage} data-testid="number-input-component" />
  );
  expect(screen.getByText(testMessage)).toBeDefined();
});

test("Test input as string - input should have no value", () => {
  render(
    <NumberInput label={testMessage} data-testid="number-input-component" />
  );

  const inputElement = screen.getByTestId("number-input-component");
  userEvent.type(inputElement, "test");
  expect(inputElement).toHaveValue(null);
});

test("Test input as number - input should have value", () => {
  render(
    <NumberInput label={testMessage} data-testid="number-input-component" />
  );

  const inputElement = screen.getByTestId("number-input-component");
  userEvent.type(inputElement, "1000.302839283");
  expect(inputElement).toHaveValue(1000.302839283);
});
