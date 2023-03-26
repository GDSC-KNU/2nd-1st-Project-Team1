import { style } from "@vanilla-extract/css";

export const SummaryContainerWrapper = style({
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr",
  
  gap: "1rem",
});

export const border = style({
  border: "3px solid red",
  height: "60vh",
});