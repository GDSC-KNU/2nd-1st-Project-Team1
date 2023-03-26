import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar, { navLinks } from "./navbar";
import { underline } from "./navbar.css";
import { MemoryRouter } from "react-router";

const randomIndex = Math.floor(Math.random() * navLinks.length);
const location = navLinks[randomIndex];

vi.mock("react-router-dom", async () => {
  const actual = (await vi.importActual(
    "react-router-dom",
  )) as typeof import("react-router-dom");
  return {
    ...actual,
    useLocation: vi.fn(() => ({
      pathname: location.path,
      search: "",
      hash: "",
      state: null,
      key: "abc123",
    })),
  };
});

describe("Navbar", () => {
  it(`should only emphasize the active link`, async () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    const navLinkNodes = await screen.findAllByRole("link");

    const notActiveLinks = navLinkNodes.filter(
      link => !link.classList.contains(underline),
    );

    expect(notActiveLinks).toHaveLength(navLinkNodes.length - 1);
    notActiveLinks.forEach(link => {
      expect(link).not.toHaveProperty("className", underline);
    });

    const activeLink = navLinkNodes.find(link =>
      link.classList.contains(underline),
    );

    expect(activeLink).toHaveProperty("className", underline);
  });
});
