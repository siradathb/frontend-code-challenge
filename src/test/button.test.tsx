import { render, screen } from "@testing-library/react";
import Button, { ButtonVariant } from "../components/Button";

const testMessage = "Button test message";

test("Test button - button should show up as expect.", () => {
  render(<Button label={testMessage} data-testid="button-component" />);
  expect(screen.getByTestId("button-component")).toBeVisible();
});

test("Test button without variant - button should default primary variant", () => {
  render(<Button label={testMessage} data-testid="button-component" />);
  expect(screen.getByTestId("button-component")).toHaveStyle(
    `background-color: #22b2c1`
  );
});

test("Test button primary variant - button should be display button with primary variant", () => {
  render(<Button label={testMessage} data-testid="button-component" />);
  expect(screen.getByTestId("button-component")).toHaveStyle(
    `background-color: #22b2c1`
  );
});

test("Test button secondary variant - button should be display button with secondary variant", () => {
  render(
    <Button
      label={testMessage}
      variant={ButtonVariant.Secondary}
      data-testid="button-component"
    />
  );
  expect(screen.getByTestId("button-component")).toHaveStyle(
    `background-color: #fff`
  );
});
