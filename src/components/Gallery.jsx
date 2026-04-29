import { Typography, Box, ImageList, ImageListItem } from "@mui/material";
import { SectionWrapper } from "../styled/shared";
import COLORS from "../constants/colors";
import { galleryImgs } from "../constants/data";

function Gallery() {
  return (
    <SectionWrapper id="gallery" bg={COLORS.lavenderLight}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Typography variant="overline" sx={{ color: COLORS.tealDark, fontWeight: 600, letterSpacing: "0.1em", display: "block", mb: 0.5 }}>
          Gallery
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, letterSpacing: "-0.02em", mb: 3, color: COLORS.indigo }}>
          A feast for the eyes first
        </Typography>
        <ImageList variant="masonry" cols={3} gap={12} sx={{ "& .MuiImageListItem-root": { borderRadius: 4, overflow: "hidden" } }}>
          {galleryImgs.map((item) => (
            <ImageListItem key={item.title} sx={{ borderRadius: 4, overflow: "hidden", cursor: "pointer", "&:hover img": { transform: "scale(1.05)" } }}>
              <img src={item.img} alt={item.title} loading="lazy"
                style={{ borderRadius: 16, transition: "transform 0.4s", display: "block" }} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </SectionWrapper>
  );
}

export default Gallery;