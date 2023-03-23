import { style } from "@vanilla-extract/css";
import CheckBox from "./CheckBox";

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
})

export const CheckOption = style({
  display: "inline-block",
  width: "200px",
  height: "30px",
  lineHeight: "200px",
  position: "relative",
  top: "-10px",
})

export const upDown = style({
  display: "inline-block",
  width: "15px",
  height: "15px",
  position: "relative",
  top: "2px",
  marginLeft: "2px",
  marginRight: "2px",
  textAlign: "center",
})

export const counting = style({
  width: "50px",
})