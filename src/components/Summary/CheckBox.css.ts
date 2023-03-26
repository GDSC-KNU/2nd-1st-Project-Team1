import { style } from "@vanilla-extract/css";

export const border = style({
    border: "3px solid green",
    height: "60vh",
});

export const input = style({
  width: "30px",
  height: "30px",
  marginRight: "10px",
  marginLeft: "10px",
  accentColor: "#f75c5c",
});

export const CheckOption = style({
  display: "inline-block",
  width: "200px",
  height: "30px",
  lineHeight: "200px",
  position: "relative",
  top: "-10px",
  fontWeight: "bold",
});

export const upDown = style({
  display: "inline-block",
  width: "15px",
  height: "15px",
  position: "relative",
  top: "2px",
  marginLeft: "2px",
  marginRight: "2px",
  textAlign: "center",
});

export const counting = style({
  width: "50px",
});

export const countButton = style({
  backgroundColor: "#D9D9D9",
  color: "white",
  border: "none",
  width: "1rem",
  height: "1rem",
  marginLeft: "2.5px",
  marginRight: "2.5px",
  borderRadius: "2px",
});

export const saveButton = style({
  backgroundColor: "#FF000080",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "0.5rem 1rem",
  width: "3.5rem",
  position: "absolute",
  right: "4rem",
});