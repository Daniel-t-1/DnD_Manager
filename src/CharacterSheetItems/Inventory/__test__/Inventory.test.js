import { Inventory } from "../Inventory";
import { cleanup, render, screen } from "@testing-library/react";

//test for render
test("renders without crashing", () => {
  render(<Inventory items={[{ name: "backpack", quantity: "0" }]} />);
});

//Test for inventory name
test("contains inventory name", () => {
  render(<Inventory items={[{ name: "backpack", quantity: "0" }]} />);
  const inventoryName = screen.getByDisplayValue("backpack");
  expect(inventoryName).toBeInTheDocument();
});

//snapshot test
test("matches snapshot", () => {
  const { asFragment } = render(
    <Inventory items={[{ name: "backpack", quantity: "0" }]} />
  );
  expect(asFragment()).toMatchSnapshot();
});

//test updates inventory item
test("updates inventory item", () => {
  const { getByDisplayValue } = render(
    <Inventory items={[{ name: "backpack", quantity: "0" }]} />
  );
  const inventoryName = getByDisplayValue("backpack");
  inventoryName.value = "backpack";
  inventoryName.dispatchEvent(new Event("change"));
  expect(inventoryName.value).toBe("backpack");
});
