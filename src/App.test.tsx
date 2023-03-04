import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";


// 테스트 단위 
describe("App", () => {
  it.skip("should renders App component", () => {
    render(<App />);
    expect(screen.getByText("Hello World")).toBeTruthy();
  });
});
