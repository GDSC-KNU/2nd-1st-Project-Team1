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
  borderBottom: "1px solid #fff",
  zIndex: "10",
  minHeight: "24px",
  selectors: {
    [`${SemesterBox}:hover &`]: {
      backgroundColor: "#999",
    },
  },
});

export const SemesterMain = style({
  width: "100%",
  display: "flex",
  border: "1px solid black",
  borderRadius: "0 0.3rem 0.3rem 0.3rem",
  padding: "0.5rem",
  minHeight: "100px",
  justifyContent: "center",
  alignItems: "center",
  selectors: {
    [`${SemesterBox}:hover &`]: {
      backgroundColor: "#999",
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
