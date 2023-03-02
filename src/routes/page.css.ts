import { style } from "@vanilla-extract/css";

export const flex = style({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "100%",
});

export const grid = style({
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gridGap: "1rem",
	width: "50%",
	border: "1px solid black",
});

export default {};
