import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";


// 테스트 단위 
describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should mount properly", () => {
    const helloWorld = screen.getByText("Hello World!");
    expect(screen.getByText(/Hello/i)).toBeDefined();
  });

  it("should have a good CI", () => {
    expect(screen.getByText(/Good CI/i)).toBeDefined();
  });
});
