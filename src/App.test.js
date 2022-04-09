import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders without crashing", () => {
  render(<App />);
});

test("Renders Content ", () => {
  render(<App />);
  const linkElement = screen.getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});
