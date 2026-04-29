import {
  Typography,
  Box,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavBar } from "../styled/shared";
import COLORS from "../constants/colors";
import { navLinks } from "../constants/data";

function Navbar({ setDrawerOpen }) {
  return (
    <NavBar>
      <Typography
        variant="h6"
        sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, letterSpacing: "-0.02em", cursor: "pointer" }}
      >
        Hanaa
        <Box component="span" sx={{ color: COLORS.violet, fontStyle: "italic" }}>'s Kitchen</Box>
      </Typography>

      <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        {navLinks.map((link) => (
          <Typography
            key={link}
            component="a"
            href={`#${link.toLowerCase()}`}
            sx={{
              fontSize: "0.82rem", fontWeight: 500, color: COLORS.indigo,
              textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase",
              "&:hover": { color: COLORS.violet }, transition: "color 0.2s",
            }}
          >
            {link}
          </Typography>
        ))}

        <Divider orientation="vertical" flexItem sx={{ mx: 1, opacity: 0.3 }} />
      </Stack>

      <IconButton onClick={() => setDrawerOpen(true)} sx={{ display: { md: "none" } }}>
        <MenuIcon />
      </IconButton>
    </NavBar>
  );
}

export default Navbar;