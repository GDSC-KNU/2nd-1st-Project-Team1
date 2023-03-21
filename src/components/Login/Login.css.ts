import { style } from "@vanilla-extract/css";

export const loginContainer = style({
    border: "3px solid red",
    textAlign: "center",
});

export const capImage = style({
    width: "53px",
    height: "62px",
    margin: 0,
});

export const input = style({
    display: "block",
    marginBlock: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
    border: "1px solid #D9D9D9",
    borderRadius: "0.5rem",
    paddingInline: "0.5rem",
    paddingBlock: "1rem",
    backgroundColor: "#D9D9D980",
    fontSize: "1rem",
    color: "#757575"
  });

  export const loginButton = style({
    userSelect: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "36px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "4px",
    borderColor: "#f75c5c",
    color: "#f75c5c",
    fontSize: "16px",
    lineHeight: "1",
    paddingLeft: "12px",
    paddingRight: "12px",
    background: "#faeded",
    marginTop: "6px",
    marginBottom: "12px",
    width: "30%",
  });

  export const signUpGuide = style({
    color: "#8E8E8E",
  });

  export const signUpLink = style({
    color: "#8E8E8E",
    fontWeight: "bold",
    marginLeft: "10px",
    textDecoration: "underline",
  });