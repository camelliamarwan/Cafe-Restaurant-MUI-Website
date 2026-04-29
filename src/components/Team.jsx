import { useState } from "react";
import { Typography, Box, Card, Avatar, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SectionWrapper } from "../styled/shared";
import COLORS from "../constants/colors";
import { teamData } from "../constants/data";

function Team() {
  const [heartRatings, setHeartRatings] = useState({ 0: 5, 1: 5, 2: 5, 3: 5 });

  return (
    <SectionWrapper id="chefs" bg="#faf9f7">
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Typography variant="overline" sx={{ color: COLORS.peachDeep, fontWeight: 600, letterSpacing: "0.1em", display: "block", mb: 0.5 }}>
          The Kitchen
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, letterSpacing: "-0.02em", mb: 0.75, color: COLORS.indigo }}>
          Chefs behind the magic
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b5c8a", mb: 4, maxWidth: 500 }}>
          Passionate artisans who treat every ingredient as a brushstroke and every plate as a canvas.
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 2.5 }}>
          {teamData.map((member, i) => (
            <Card
              key={member.name}
              sx={{ bgcolor: "white", textAlign: "center", p: 3, transition: "transform 0.25s", "&:hover": { transform: "translateY(-4px)" } }}
            >
              <Avatar
                sx={{
                  width: 88, height: 88, mx: "auto", mb: 1.5,
                  bgcolor: `${member.color}22`, color: member.color,
                  fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: "1.4rem",
                  border: `3px solid ${member.color}44`,
                  boxShadow: `0 0 0 3px white, 0 0 0 5px ${member.color}33`,
                }}
              >
                {member.initials}
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.indigo }}>{member.name}</Typography>
              <Typography variant="caption" sx={{ color: member.color, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", display: "block", mb: 1 }}>
                {member.role}
              </Typography>
              <Typography variant="body2" sx={{ color: "#7c6d9a", lineHeight: 1.65, mb: 1.5 }}>{member.bio}</Typography>
              <Rating
                value={heartRatings[i]}
                onChange={(_, val) => setHeartRatings((prev) => ({ ...prev, [i]: val }))}
                icon={<FavoriteIcon fontSize="inherit" sx={{ color: COLORS.hotpink }} />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" sx={{ color: "#e9d5e9" }} />}
                size="small"
              />
            </Card>
          ))}
        </Box>
      </Box>
    </SectionWrapper>
  );
}

export default Team;