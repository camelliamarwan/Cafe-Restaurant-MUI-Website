import { Typography, Box, Stack, Button, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { SectionWrapper } from "../styled/shared";
import COLORS from "../constants/colors";
import { menuItems, menuFilters } from "../constants/data";

function Menu({ menuFilter, setMenuFilter, showToast }) {
  const filteredMenu = menuFilter === "All"
    ? menuItems
    : menuItems.filter((i) => i.cat === menuFilter.toLowerCase());

  return (
    <SectionWrapper id="menu" bg="#faf9f7">
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 2, mb: 4 }}>
          <Box>
            <Typography variant="overline" sx={{ color: COLORS.hotpink, fontWeight: 600, letterSpacing: "0.1em", display: "block", mb: 0.5 }}>
              Our Menu
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, letterSpacing: "-0.02em", color: COLORS.indigo }}>
              Dishes worth returning for
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
            {menuFilters.map((f) => (
              <Button
                key={f}
                variant={menuFilter === f ? "contained" : "outlined"}
                size="small"
                onClick={() => setMenuFilter(f)}
                sx={{
                  bgcolor: menuFilter === f ? COLORS.indigo : "transparent",
                  borderColor: COLORS.lavender,
                  color: menuFilter === f ? "white" : COLORS.indigo,
                  "&:hover": { bgcolor: menuFilter === f ? COLORS.violet : COLORS.lavenderLight, borderColor: COLORS.violet },
                  px: 2,
                }}
              >
                {f}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2.5 }}>
          {filteredMenu.map((item) => (
            <Card
              key={item.name}
              sx={{ bgcolor: "white", transition: "transform 0.25s, box-shadow 0.25s", "&:hover": { transform: "translateY(-6px)", boxShadow: "0 20px 40px rgba(46,31,94,0.14)" } }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia component="img" height={200} image={item.img} alt={item.name}
                  sx={{ transition: "transform 0.4s", "&:hover": { transform: "scale(1.03)" } }} />
                {item.badge && (
                  <Box sx={{ position: "absolute", top: 12, left: 12, bgcolor: item.badgeBg, color: item.badgeColor, px: 1.5, py: 0.4, borderRadius: 10, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                    {item.badge}
                  </Box>
                )}
              </Box>
              <CardContent sx={{ pb: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.indigo, mb: 0.5 }}>{item.name}</Typography>
                <Typography variant="body2" sx={{ color: "#7c6d9a", lineHeight: 1.65 }}>{item.desc}</Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2, justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: "1.2rem", fontWeight: 700, color: COLORS.violet }}>{item.price}</Typography>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => showToast(`✓ ${item.name} added!`)}
                  sx={{ bgcolor: COLORS.indigo, "&:hover": { bgcolor: COLORS.violet }, minWidth: 0, width: 34, height: 34, borderRadius: "50%", p: 0, fontSize: "1.2rem" }}
                >
                  +
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </SectionWrapper>
  );
}

export default Menu;