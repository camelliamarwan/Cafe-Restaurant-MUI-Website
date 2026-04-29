import { Typography, Box, Stack, Divider } from "@mui/material";
import { FooterRoot, FooterLink } from "../styled/shared";
import COLORS from "../constants/colors";

const exploreLinks = ["Our Story", "Menu", "Gallery", "The Kitchen", "Reviews"];
const visitLinks = ["14 Rami St, Zamalek", "Cairo, Egypt", "+20 2 1234 5678", "hello@hanaa's_kitchen.com"];
const hours = [
  ["Mon–Fri", "8am–10pm"],
  ["Saturday", "9am–11pm"],
  ["Sunday", "9am–11pm"],
  ["Holidays", "10am–9pm"],
];

function Footer() {
  return (
    <FooterRoot>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "2fr 1fr 1fr 1fr" },
            gap: 4,
            pb: 4,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "white",
                mb: 0.75,
              }}
            >
              Hanaa
              <Box component="span" sx={{ color: COLORS.yellow, fontStyle: "italic" }}>
                's Kitchen
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: 230,
                mb: 1.5,
              }}
            >
              A restaurant and café where every season finds its flavor and every guest
              finds their moment.
            </Typography>

          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                mb: 1.5,
              }}
            >
              Explore
            </Typography>
            <Stack spacing={0.75}>
              {exploreLinks.map((l) => (
                <FooterLink key={l} href="#">{l}</FooterLink>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                mb: 1.5,
              }}
            >
              Visit
            </Typography>
            <Stack spacing={0.75}>
              {visitLinks.map((l) => (
                <FooterLink key={l} href="#">{l}</FooterLink>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                mb: 1.5,
              }}
            >
              Hours
            </Typography>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 1.5 }} />
            <Stack spacing={0.75}>
              {hours.map(([day, time]) => (
                <Stack key={day} direction="row" sx={{ justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>
                    {day}
                  </Typography>
                  <Typography sx={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                    {time}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ pt: 2, gap: 1, justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography sx={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
            © 2024 Hanaa's Kitchen. All rights reserved.
          </Typography>
          <Typography sx={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
            Made with{" "}
            <Box component="span" sx={{ color: COLORS.pink }}>
              ♥
            </Box>{" "}
            in Cairo
          </Typography>
        </Stack>
      </Box>
    </FooterRoot>
  );
}

export default Footer;