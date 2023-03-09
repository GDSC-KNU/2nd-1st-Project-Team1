import { style } from "@vanilla-extract/css";

export const SemesterBox = style({
  width: "100%",
  height: "auto",
  border: "1px solid black",
  padding: "0.5rem",
});

export const SemesterHeader = style({
  width: "100px",
  borderTop: "1px solid black",
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
  borderRadius: "0.3rem 0.3rem 0 0",
  borderBottom: "1px solid #fff",
  zIndex: "10",
});

export const SemesterMain = style({
  width: "100%",
  display: "flex",
  border: "1px solid black",
  borderRadius: "0 0.3rem 0.3rem 0.3rem",
  padding: "0.5rem",
});

export const SemesterText = style({
  width: "auto",
  margin: "0",
  textAlign: "center",
});