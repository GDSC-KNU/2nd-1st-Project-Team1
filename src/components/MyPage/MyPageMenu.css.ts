import { style } from "@vanilla-extract/css";

export const menuWrapper = style({
  display: "grid",
  width: "280px",
  height: "1vh",
  margin: 0,
  //paddingTop: "20%",
})

export const menuBox = style({
  alignItems: "center",
  listStyle: "none",
})

export const profile = style({
  width: "100%",
  height: "280px",
  marginTop: "10%",
  marginBottom: "2rem",
  borderRadius: "50%",
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
  height: "3rem",
  //paddingTop: "10%",
  fontSize: "1.4rem",
})

export const bold = style({
  fontWeight: "bold",
})

export const pageLink = style({
  textDecoration: "none",
  color: "black",
  textAlign: "center",
  paddingTop: "1rem",
  height: "4rem",
  fontSize: "1.4rem",
});