import { keyframes, style } from "@vanilla-extract/css";

export const curriculumContainer = style({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  paddingBlock: "1rem",
  paddingInline: "1rem",
  height: "100vh",
  overflowY: "auto",
  top: "0",
  right: "0",
  width: "350px",
  backgroundColor: "white",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
});

export const input = style({
  display: "block",
  marginBlock: "0.5rem",
  width: "100%",
  border: "3px solid black",
  borderRadius: "0.5rem",
  paddingInline: "0.5rem",
  paddingBlock: "0.5rem",
});

export const searchFilterWrapper = style({
  display: "flex",
  flexDirection: "row",
  // overflowY: "scroll",
  flexWrap: "wrap",
  gap: "0.5rem",

  marginInline: "-1rem",

  paddingBlock: ".5rem",
  paddingInline: "1rem",
});

export const searchFilter = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",

  backgroundColor: "#e3e3e3",
  paddingBlock: ".5rem",
  paddingInline: ".75rem",
  borderRadius: "0.5rem",
});

export const searchFilterTitle = style({
  fontSize: "1rem",
});

export const searchFilterInput = style({
  width: "80px",
  fontSize: "1rem",
  borderRadius: "0.5rem",
});

export const searchButton = style({
  display: "block",
  marginBlock: "0.5rem",
  width: "100%",
  border: "3px solid black",
  borderRadius: "0.5rem",
  paddingInline: "0.5rem",
  paddingBlock: "0.5rem",
  backgroundColor: "#aaaaaa",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.25rem",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#999999",
  },
  ":active": {
    backgroundColor: "#888888",
  },
});

export const resultsContainer = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginBlock: "1rem",
});

export const resultWrapper = style({
  backgroundColor: "#FEF6FA",
  borderRadius: "0.5rem",
  paddingBlock: "1.5rem",
  paddingInline: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  outline: "3px solid #D25757",
});

export const resultTitle = style({
  fontSize: "1.5rem",
  fontWeight: "bolder",
  color: "#D25757",
});

export const resultDetails = style({
  color: "black",
  display: "flex",
  flexDirection: "row",
  columnGap: "0.5rem",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});

export const resultDetailsRequired = style({
  fontWeight: "bold",
  color: "#7F056E",
});

export const resultDetailsDesign = style({
  fontWeight: "bold",
  color: "#D1AFD3",
});

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const loading = style({
  display: "grid",
  animationName: spin,
  animationDuration: "3s",
  animationIterationCount: "infinite",
  fontSize: "10vh",
  animationTimingFunction: "linear",
  transformOrigin: "center",
  placeContent: "center",
});
