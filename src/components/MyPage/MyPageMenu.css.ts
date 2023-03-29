import { style } from "@vanilla-extract/css";

export const menuWrapper = style({
  display: "grid",
  width: "280px",
  margin: 0,
  paddingTop: "20%",
})

export const menuBox = style({
  alignItems: "center",
  listStyle: "none",
})

export const profile = style({
  width: "100%",
  marginTop: "20%",
  marginBottom: "30%",
  borderRadius: "70%",
  backgroundColor: "white",
  boxShadow: "4px 4px 8px gray",
  objectFit: "contain",
  textAlign: "center",
})

export const menuLink = style({
  textDecoration: "none",
  color: "black",
  textAlign: "center",
  width: "100%",
  height: "75%",
  paddingTop: "10%",
  fontSize: "1.4rem",
})

export const underline = style({
  textDecoration:"underline",
  fontWeight: "bold",
  color: "black"
})