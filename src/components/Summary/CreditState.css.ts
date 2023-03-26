import { style } from "@vanilla-extract/css";

export const border = style({
    border: "3px solid yellow",
    height: "60vh",
});

export const CreditType = style({
    backgroundColor: "#FF000080",
    border: "none",
    borderRadius: "5px",
    padding: "0.5rem 1rem",
    color: "white",
    width: "5rem",
})

export const Table = style({
    width: "90%",
    textAlign: "center",
    borderSpacing: "0.5rem 1rem",
    // borderCollapse: "collapse",    
});

export const TableBorder = style({
    borderTop: "1px solid #D9D9D9",
    padding: "0.7rem",
});

export const CreditSpan = style({
    fontWeight: "bold",
    fontSize: "1.5rem",
});