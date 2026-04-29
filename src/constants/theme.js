import { createTheme } from "@mui/material/styles";
import COLORS from "./colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: COLORS.violet },
    secondary: { main: COLORS.hotpink },
    background: { default: "#faf9f7", paper: "#ffffff" },
    text: { primary: COLORS.indigo },
  },
  typography: {
    fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif', fontWeight: 900 },
    h2: { fontFamily: '"Playfair Display", serif', fontWeight: 800 },
    h3: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h4: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h5: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h6: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.95rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0 4px 24px rgba(46,31,94,0.08)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            backgroundColor: COLORS.lavenderLight,
            "& fieldset": { borderColor: COLORS.lavender },
            "&:hover fieldset": { borderColor: COLORS.violet },
            "&.Mui-focused fieldset": { borderColor: COLORS.violet },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 50, fontWeight: 500, fontSize: "0.8rem" },
      },
    },
  },
});