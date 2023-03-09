import { style } from "@vanilla-extract/css";

export const ClassBox = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "25%",
  border: "1px solid black",
  padding: "0.5rem",
  justifyContent: "center",
  textAlign: "center",
  margin: "0.5rem",
  flex: "1",
  justifyItems: "center",
  ":hover": {
    backgroundColor: "#999",
  },
});
