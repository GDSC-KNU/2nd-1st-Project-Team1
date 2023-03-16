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
  backgroundColor: "#fff",
});

export const CreditTitle = style({
  width: "50%",
  padding: "0.5rem",
  fontSize: "0.5rem",
  color: "white",
  backgroundColor: "#ef8783",
  textAlign: "center",
});
export const CreditPoint = style({
  width: "50%",
  padding: "0.5rem",
  fontSize: "0.5rem",
  textAlign: "center",
  //   backgroundColor: "blue",
});
