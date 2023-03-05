import { style } from "@vanilla-extract/css";

export const curriculumContainer = style({
  position: "absolute",
  paddingBlock: "1rem",
  paddingInline: "1rem",
  maxHeight: "100vh",
  overflowY: "auto",
  top: "0",
  right: "0",
  width: "350px",
  backgroundColor: "white",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
});

export const input = style({
  display: "block",
  marginBlock: "1rem",
  width: "100%",
  border: "3px solid black",
  borderRadius: "0.5rem",
  paddingInline: "0.5rem",
  paddingBlock: "1rem",
});

export const resultsContainer = style({
  display: "grid",
  gap: "1rem",
  marginBlock: "1rem",
  width: "100%",
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
