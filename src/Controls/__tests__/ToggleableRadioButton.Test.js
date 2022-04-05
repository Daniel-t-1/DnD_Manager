import { render, screen } from "@testing-library/react";
import ToggleableRadioButton from "../ToggleableRadioButton";

test("Renders without crashing", () => {
  render(<ToggleableRadioButton />);
});

//test to see if the button is rendered
test("Render returns Button", () => {
  render(<ToggleableRadioButton />);
  const linkElement = screen.getByTestId("ToggleableRadioButton");
  expect(linkElement).toBeInTheDocument();
});

//Test button calls updateChecked
test("Button calls updateChecked", () => {
  const updateChecked = jest.fn();
  render(<ToggleableRadioButton updateChecked={updateChecked} />);
  const button = screen.getByTestId("ToggleableRadioButton");
  button.click();
  expect(updateChecked).toHaveBeenCalled();
});

//snapshot testing
test("Snapshot testing button On", () => {
  const { asFragment } = render(<ToggleableRadioButton enabled={true} />);
  expect(asFragment()).toMatchSnapshot();
});

test("Snapshot testing button Off", () => {
  const { asFragment } = render(<ToggleableRadioButton enabled={false} />);
  expect(asFragment()).toMatchSnapshot();
});

test("Snapshot testing small button Off", () => {
  const { asFragment } = render(
    <ToggleableRadioButton enabled={false} size="small" />
  );
  expect(asFragment()).toMatchSnapshot();
});
test("Snapshot testing Small button On", () => {
  const { asFragment } = render(
    <ToggleableRadioButton enabled={true} size="small" />
  );
  expect(asFragment()).toMatchSnapshot();
});
