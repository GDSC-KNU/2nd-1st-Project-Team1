import { createThemeContract, style } from "@vanilla-extract/css";

export const BackgroundWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "1000",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
});

// background-color: ${({ theme }) => theme.backgroundColor.tab3};
//   width: ${({ width }) => width}px;
//   border-radius: 0.375rem;
//   padding: ${({ p }) => p}px;
//   display: flex;
//   flex-direction: column;

export const ModalContainerVars = createThemeContract({
  width: {
    size: null,
  },
  padding: {
    p: null,
  },
});
export const ModalContainer = style({
  backgroundColor: "#9999",
  width: ModalContainerVars.width.size,
  borderRadius: "0.375rem",
  padding: ModalContainerVars.padding.p,
  display: "fix",
  flexDirection: "column",
});
