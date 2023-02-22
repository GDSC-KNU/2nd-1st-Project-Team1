import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should mount properly", () => {
    render(<App />);
    const helloWorld = screen.getByText("Hello World!");
    expect(screen.getByText(/Hello/i)).toBeDefined();
  });

  it("should have a paragraph", () => {
    render(<App />);
    const paragraph = screen.getByText("Oops");
    expect(paragraph).toBeDefined();
  });
});
