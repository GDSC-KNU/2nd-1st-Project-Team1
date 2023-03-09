import { style } from "@vanilla-extract/css";

export const CreditList = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",
});

export const CreditBox = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  justifyContent: "center",
});

export const CreditItem = style({
  padding: "0.5rem",
  //   backgroundColor: "blue",
});
