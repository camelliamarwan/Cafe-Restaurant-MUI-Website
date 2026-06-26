import { Typography, Box, Stack, Divider, Button, IconButton, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import COLORS from "../constants/colors";
import { navLinks } from "../constants/data";

function MobileDrawer({ open, setDrawerOpen }) {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={() => setDrawerOpen(false)}
      slotProps={{ paper: { sx: { borderRadius: "24px 24px 0 0", p: 3, bgcolor: "white" } } }}
    >
      <Box sx={{ width: 40, height: 4, bgcolor: COLORS.lavender, borderRadius: 2, mx: "auto", mb: 2.5 }} />

      <IconButton onClick={() => setDrawerOpen(false)} sx={{ position: "absolute", top: 12, right: 12 }}>
        <CloseIcon />
      </IconButton>

      <Stack spacing={0} divider={<Divider flexItem sx={{ opacity: 0.15 }} />}>
        {navLinks.map((link) => (
          <Typography
            key={link}
            component="a"
            href={`#${link.toLowerCase()}`}
            onClick={() => setDrawerOpen(false)}
            sx={{
              fontFamily: '"Playfair Display", serif', fontSize: "1.5rem", fontWeight: 700,
              color: COLORS.indigo, textDecoration: "none", py: 1.2,
              "&:hover": { color: COLORS.violet },
            }}
          >
            {link}
          </Typography>
        ))}
      </Stack>

      <Button
        variant="contained"
        fullWidth
        href="#reserve"
        onClick={() => setDrawerOpen(false)}
        sx={{ mt: 2.5, bgcolor: COLORS.indigo, "&:hover": { bgcolor: COLORS.violet }, py: 1.25, borderRadius: 3 }}
      >
        Reserve a Table
      </Button>
    </Drawer>
  );
}

export default MobileDrawer;