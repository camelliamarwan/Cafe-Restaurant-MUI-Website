import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import COLORS from "../constants/colors";

export const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "7rem 5vw 4rem",
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
  "&::before": {
    content: '""',
    position: "absolute",
    top: -100,
    right: -120,
    width: 560,
    height: 560,
    borderRadius: "50%",
    background: "radial-gradient(circle, #f5f0ff 0%, #e9d5ff 60%, transparent 100%)",
    opacity: 0.7,
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -80,
    left: -100,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "radial-gradient(circle, #fff0f6 0%, #fce7f3 60%, transparent 100%)",
    opacity: 0.6,
    pointerEvents: "none",
  },
}));

export const NavBar = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1200,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.9rem 5vw",
  backgroundColor: "rgba(250,249,247,0.9)",
  backdropFilter: "blur(14px)",
  borderBottom: `1px solid ${COLORS.lavender}44`,
});

export const SectionWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bg",
})(({ bg }) => ({
  padding: "5rem 5vw",
  backgroundColor: bg || "transparent",
}));

export const ColorPill = styled(Box, {
  shouldForwardProp: (prop) => !["bg", "color", "border"].includes(prop),
})(({ bg, color, border }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  background: bg,
  color: color,
  border: `1px solid ${border}`,
  borderRadius: 50,
  padding: "0.35rem 1rem",
  fontSize: "0.78rem",
  fontWeight: 600,
  letterSpacing: "0.05em",
}));

export const FooterRoot = styled(Box)({
  background: COLORS.indigo,
  color: "rgba(255,255,255,0.85)",
  padding: "3.5rem 5vw 2rem",
});

export const FooterLink = styled("a")({
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  fontSize: "0.88rem",
  transition: "color 0.2s",
  "&:hover": { color: COLORS.yellow },
});