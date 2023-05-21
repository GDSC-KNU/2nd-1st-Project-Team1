import { style } from "@vanilla-extract/css";

export const SemesterBox = style({
  width: "100%",
  height: "auto",
  padding: "0.5rem",
});

export const SemesterHeader = style({
  width: "100px",
  borderTop: "1px solid black",
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
  borderRadius: "0.3rem 0.3rem 0 0",
  zIndex: "10",
  minHeight: "24px",
  boxShadow: "1px 0px 6px rgb(0 0 0 / 16%), 2px 0px 0px rgb(0 0 0 / 23%)",
  backgroundColor: "#fff",
  selectors: {
    [`${SemesterBox}:hover &`]: {
      // backgroundColor: "#999",
      border: "1px solid blue",
      borderBottom: "0px !important",
    },
  },
});

export const SemesterMain = style({
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  borderRadius: "0 0.3rem 0.3rem 0.3rem",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  padding: "1rem",
  minHeight: "100px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  selectors: {
    [`${SemesterBox}:hover &`]: {
      // backgroundColor: "#999",
      border: "1px solid blue",
    },
  },
});

export const SemesterText = style({
  width: "auto",
  margin: "0",
  textAlign: "center",
});

export const plusSemester = style({
  width: "100%",
  height: "100%",
  fontSize: "3rem",
  textAlign: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
});

export const SemesterCredit = style({
  position: "absolute",
  top: "0",
  right: "1rem",
  backgroundColor: "#f9dda7",
  fontSize: "0.75rem",
});

export const ulBox = style({
  width: "80%",
  marginLeft: "auto",
});
