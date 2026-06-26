import { useState } from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../constants/theme";

import Navbar from "../components/Navbar";
import MobileDrawer from "../components/MobileDrawer";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

import COLORS from "../constants/colors";

function LandingPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuFilter, setMenuFilter] = useState("All");
  const [formState, setFormState] = useState({
    resName: "",
    resPhone: "",
    resDate: "",
    resTime: "",
    resGuests: "",
    resOccasion: null,
    resNotes: "",
  });
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2800);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <Box sx={{ bgcolor: "#faf9f7", color: lightTheme.palette.text.primary, minHeight: "100vh", overflowX: "hidden" }}>

        <Navbar setDrawerOpen={setDrawerOpen} />

        <MobileDrawer open={drawerOpen} setDrawerOpen={setDrawerOpen} />

        <Hero />

        <About />

        <Menu menuFilter={menuFilter} setMenuFilter={setMenuFilter} showToast={showToast} />

        <Gallery />

        <Team />

        <Testimonials />

        <Reservation formState={formState} setFormState={setFormState} showToast={showToast} />

        <Footer />

        {toast && (
          <Box
            sx={{
              position: "fixed",
              bottom: 28,
              right: 28,
              zIndex: 9999,
              bgcolor: COLORS.indigo,
              color: "white",
              px: 2.5,
              py: 1.25,
              borderRadius: 3,
              fontSize: "0.9rem",
              fontWeight: 500,
              boxShadow: "0 8px 24px rgba(46,31,94,0.28)",
              animation: "fadeUp 0.3s ease",
            }}
          >
            {toast}
          </Box>
        )}

        <style>{`@keyframes fadeUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }`}</style>
      </Box>
    </ThemeProvider>
  );
}

export default LandingPage;