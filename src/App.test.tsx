import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it.skip("should renders App component", () => {
    render(<App />);
    expect(screen.getByText("Hello World")).toBeTruthy();
  });
});
