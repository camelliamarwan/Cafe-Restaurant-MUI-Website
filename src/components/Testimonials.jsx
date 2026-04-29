import { Typography, Box, Stack, Divider, Avatar, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { SectionWrapper } from "../styled/shared";
import COLORS from "../constants/colors";
import { testiData } from "../constants/data";

function Testimonials() {
  const testiRatings = { 0: 5, 1: 5, 2: 5, 3: 4 };

  return (
    <SectionWrapper id="testimonials" bg={COLORS.indigo}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Typography
          variant="overline"
          sx={{ color: COLORS.yellow, fontWeight: 600, letterSpacing: "0.1em", display: "block", mb: 0.5 }}
        >
          Guest Reviews
        </Typography>

        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, letterSpacing: "-0.02em", mb: 0.75, color: "white" }}
        >
          What our guests are saying
        </Typography>

        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.55)", mb: 4 }}>
          Over 2,400 reviews — and counting.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 2,
          }}
        >
          {testiData.map((t, i) => (
            <Box
              key={t.name}
              sx={{
                bgcolor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 4,
                p: 3,
                transition: "background 0.2s, transform 0.2s",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.12)",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <Rating
                value={testiRatings[i]}
                readOnly
                size="small"
                icon={<StarIcon fontSize="inherit" sx={{ color: COLORS.yellow }} />}
                emptyIcon={<StarIcon fontSize="inherit" sx={{ color: "rgba(255,255,255,0.2)" }} />}
                sx={{ mb: 1 }}
              />

              <Typography
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "2.8rem",
                  color: COLORS.yellow,
                  lineHeight: 0.7,
                  mb: 0.5,
                }}
              >
                "
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75, mb: 2 }}
              >
                {t.text}
              </Typography>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 2 }} />

              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: t.color,
                    width: 42,
                    height: 42,
                    fontSize: "0.85rem",
                    fontWeight: 700,
                  }}
                >
                  {t.initials}
                </Avatar>
                <Box>
                  <Typography sx={{ color: "white", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.2 }}>
                    {t.name}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
                    {t.detail}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </SectionWrapper>
  );
}

export default Testimonials;