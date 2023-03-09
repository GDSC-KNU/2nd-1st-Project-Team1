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

export const deleteClass = style({
  borderRadius: "2rem",
  width: "2rem",
  height: "2rem",
  fontSize: "1.2rem",
  display: "none",
  textAlign: "center",
  justifyContent: "center",
  border: "1px solid black",
  selectors: {
    [`${ClassBox}:hover &`]: {
      display: "block",
      position: "absolute",
    },
  },
});

export const plusClass = style({
  width: "100%",
  height: "100%",
  fontSize: "1.2rem",
  textAlign: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
});
