import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  
  const element = screen.queryByText("hello from the Header!");

  screen.debug();

  expect(element).toBeInTheDocument();
});
