import { Typography, Box, Stack, Chip } from "@mui/material";
import { SectionWrapper } from "../styled/shared";
import COLORS from "../constants/colors";

const chips = [
  { label: "🌾 Local Produce", bg: COLORS.yellowLight, color: COLORS.yellowDeep, border: COLORS.yellow },
  { label: "🌸 Seasonal Menu", bg: COLORS.pinkLight, color: COLORS.hotpink, border: COLORS.pink },
  { label: "🌿 Organic Coffee", bg: COLORS.tealLight, color: COLORS.tealDark, border: COLORS.teal },
  { label: "🍯 House-made Jams", bg: COLORS.peachLight, color: COLORS.peachDeep, border: COLORS.peach },
];

function About() {
  return (
    <SectionWrapper id="about" bg={COLORS.lavenderLight}>
      <Box sx={{ maxWidth: 1100, mx: "auto", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 6, alignItems: "center" }}>
        <Box>
          <Typography variant="overline" sx={{ color: COLORS.violet, fontWeight: 600, letterSpacing: "0.1em", display: "block", mb: 1 }}>
            Our Story
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, lineHeight: 1.15, letterSpacing: "-0.02em", mb: 2, color: COLORS.indigo }}>
            A place crafted with<br />love &amp; intention
          </Typography>
          <Typography variant="body1" sx={{ color: "#6b5c8a", lineHeight: 1.8, mb: 1.5 }}>
            Born from a passion for honest ingredients and human connection,
            Pétale & Bloom is more than a café — it's a living, breathing ritual for your day.
          </Typography>
          <Typography variant="body2" sx={{ color: "#7c6d9a", lineHeight: 1.8, mb: 2.5 }}>
            From our open kitchen to your table, every dish is prepared with
            seasonal produce sourced directly from local farmers.
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ gap: 1 }}>
            {chips.map(({ label, bg, color, border }) => (
              <Chip key={label} label={label} sx={{ bgcolor: bg, color, border: `1px solid ${border}` }} />
            ))}
          </Stack>
        </Box>

        <Box sx={{ position: "relative", display: { xs: "none", md: "block" } }}>
          <Box sx={{ borderRadius: 6, overflow: "hidden", aspectRatio: "4/5" }}>
            <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80" alt="café ambiance"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Box>
          <Box sx={{ position: "absolute", bottom: -20, left: -20, bgcolor: "white", borderRadius: 4, p: 2, boxShadow: "0 8px 30px rgba(46,31,94,0.14)", display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: COLORS.yellowLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>🏆</Box>
            <Box>
              <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: "0.95rem", fontWeight: 700, color: COLORS.indigo, lineHeight: 1.2 }}>Best Café 2026</Typography>
              <Typography sx={{ fontSize: "0.75rem", color: "#7c6d9a" }}>Cairo Food Awards</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionWrapper>
  );
}

export default About;