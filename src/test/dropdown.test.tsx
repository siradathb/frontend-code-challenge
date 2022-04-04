import { render, screen } from "@testing-library/react";
import Dropdown from "../components/Dropdown";

const options = [
  { key: "0", value: "sell" },
  { key: "1", value: "buy" },
];

test("Test dropdown - dropdown should show up as expect.", () => {
  render(<Dropdown options={options} data-testid="dropdown-component" />);
  expect(screen.getByTestId("dropdown-component")).toBeVisible();
});

test("Test dropdown options - mapping options as expect.", () => {
  render(<Dropdown options={options} data-testid="dropdown-component" />);
  const listOptions = options.map((item) =>
    screen.getByTestId(`choice-${item.key}`)
  );
  listOptions.forEach((item) =>
    expect(screen.getByTestId("dropdown-component")).toContainElement(item)
  );
});
