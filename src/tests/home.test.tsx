import { render, screen } from "@testing-library/react";
import HomePage from "../app/page";

test("Should render home page title", () => {
  render(<HomePage />);
  expect(screen.getByText(/Bem-vindo ao meu portfólio/i)).toBeInTheDocument();
});
