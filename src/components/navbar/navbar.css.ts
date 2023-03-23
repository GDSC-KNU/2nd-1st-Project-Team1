import { style } from "@vanilla-extract/css";

export const navbarWrapper = style({
  display: "flex",
  alignItems: "center",
  padding: "1rem",
  gap: "1rem",
  backgroundColor: "white",
});

export const underline = style({
  textDecoration: "underline",
  fontWeight: "bold",
  color: "black",
});

export const navbarLink = style({
  textDecoration: "none",
  color: "black",
});
