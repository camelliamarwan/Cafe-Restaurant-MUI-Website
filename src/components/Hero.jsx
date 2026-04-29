import { Typography, Box, Stack, Divider, Button } from "@mui/material";
import { HeroSection, ColorPill } from "../styled/shared";
import COLORS from "../constants/colors";

function Hero() {

  return (
    <HeroSection id="hero">
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: 700}}>
        <ColorPill bg={COLORS.yellowLight} color={COLORS.yellowDeep} border={COLORS.yellow} sx={{ mb: 2.5 }}>
          ✦ Est. 2020 · Cairo, Egypt
        </ColorPill>

        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "3rem", md: "5rem" }, lineHeight: 1.05, letterSpacing: "-0.03em", mb: 2, color: COLORS.indigo }}
        >
          Where Every{" "}
          <Box component="em" sx={{ color: COLORS.violet, fontStyle: "italic" }}>Bite</Box>
          <br />
          Tells a Story
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.75, color: "#5a4a7a", maxWidth: 500, mb: 3 }}>
          A restaurant and café where seasonal dishes, hand-crafted drinks, and warm
          ambiance come together to create moments worth savoring.
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 4, gap: 1 }}>
          <Button variant="contained" size="large" href="#reserve"
            sx={{ bgcolor: COLORS.indigo, "&:hover": { bgcolor: COLORS.violet }, px: 3.5, py: 1.25 }}>
            Reserve a Table
          </Button>
          <Button variant="outlined" size="large" href="#menu"
            sx={{ borderColor: COLORS.violet, color: COLORS.violet, "&:hover": { bgcolor: COLORS.lavenderLight, borderColor: COLORS.indigo }, px: 3.5, py: 1.25 }}>
            Explore Menu
          </Button>
        </Stack>

        <Stack direction="row" spacing={4} divider={<Divider orientation="vertical" flexItem sx={{ opacity: 0.25 }} />}>
          {[["12+", "Years of craft"], ["4.9★", "Guest rating"], ["80+", "Menu items"]].map(([num, label]) => (
            <Box key={label}>
              <Typography variant="h4" sx={{ lineHeight: 1, color: COLORS.indigo }}>{num}</Typography>
              <Typography variant="caption" sx={{ color: "#7c6d9a", mt: 0.3, display: "block" }}>{label}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>


    </HeroSection>
  );
}

export default Hero;