import { style } from "@vanilla-extract/css";

export const List = style({
  listStyle: "none",
});

export const ListBox = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  width: "50%",
  minHeight: "66px",
  float: "left",
  // border: "1px solid black",
  padding: "0.5rem",
  justifyContent: "center",
  textAlign: "center",
  margin: "0.5rem",
  flex: "1",
  justifyItems: "center",
  backgroundColor: "white",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
});

export const ClassBox = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  width: "80%",
  minHeight: "66px",
  // border: "1px solid black",
  padding: "0.5rem",
  justifyContent: "center",
  textAlign: "center",
  margin: "0.5rem",
  flex: "1",
  justifyItems: "center",
  backgroundColor: "#FDF6FA",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
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
  // border: "1px solid black",
  selectors: {
    [`${ClassBox}:hover &`]: {
      display: "block",
      position: "absolute",
    },
  },
});

export const plusClass = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  fontSize: "1.2rem",
  textAlign: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
});
