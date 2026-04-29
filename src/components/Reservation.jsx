import { Typography, Box, Stack, Button, Card, Avatar, TextField, Autocomplete } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import { SectionWrapper } from "../styled/shared";
import COLORS from "../constants/colors";
import { occasions } from "../constants/data";

const locationItems = [
  { icon: <LocationOnIcon />, color: COLORS.yellow, label: "Address", val: "14 Bloom Street, Zamalek, Cairo, Egypt" },
  { icon: <AccessTimeIcon />, color: COLORS.teal, label: "Hours", val: "Mon–Fri 8am–10pm · Sat–Sun 9am–11pm" },
  { icon: <PhoneIcon />, color: COLORS.pink, label: "Reservations", val: "+20 2 1234 5678 · hello@hanna's_kitchen.com" },
];

function Reservation({ formState, setFormState, showToast }) {
  const { resName, resPhone, resDate, resTime, resGuests, resOccasion, resNotes } = formState;
  const update = (key) => (e) => setFormState((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <SectionWrapper id="reserve" bg={COLORS.yellowLight}>
      <Box sx={{ maxWidth: 1100, mx: "auto", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" }, gap: 6, alignItems: "start" }}>

        {/* Left — location info */}
        <Box>
          <Typography variant="overline" sx={{ color: COLORS.yellowDeep, fontWeight: 600, letterSpacing: "0.1em", display: "block", mb: 0.5 }}>
            Find Us
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, letterSpacing: "-0.02em", mb: 1.5, color: COLORS.indigo }}>
            Come as you are,<br />leave enchanted
          </Typography>
          <Typography variant="body1" sx={{ color: "#6b5c8a", mb: 3, lineHeight: 1.75 }}>
            Walk-ins welcome — but a reservation guarantees your favorite corner spot.
          </Typography>
          <Stack spacing={2}>
            {locationItems.map(({ icon, color, label, val }) => (
              <Stack key={label} direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                <Avatar sx={{ bgcolor: color, width: 40, height: 40, flexShrink: 0 }}>{icon}</Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.88rem", color: COLORS.indigo }}>{label}</Typography>
                  <Typography variant="body2" sx={{ color: "#7c6d9a" }}>{val}</Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* Right — form */}
        <Card sx={{ bgcolor: "white", p: { xs: 2.5, md: 4 }, boxShadow: "0 12px 40px rgba(46,31,94,0.1)" }}>
          <Typography variant="h5" sx={{ mb: 2.5, color: COLORS.indigo }}>Book your table</Typography>
          <Stack spacing={2}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField fullWidth label="Full Name" variant="outlined" value={resName} onChange={update("resName")} />
              <TextField fullWidth label="Phone" variant="outlined" value={resPhone} onChange={update("resPhone")} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField fullWidth label="Date" type="date" variant="outlined" value={resDate} onChange={update("resDate")} slotProps={{ inputLabel: { shrink: true } }} />
              <TextField fullWidth label="Time" type="time" variant="outlined" value={resTime} onChange={update("resTime")} slotProps={{ inputLabel: { shrink: true } }} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField fullWidth select label="Guests" variant="outlined" value={resGuests} onChange={update("resGuests")} slotProps={{ select: { native: true } }}>
                {["1 guest", "2 guests", "3–4 guests", "5–6 guests", "7+ guests"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </TextField>
              <Autocomplete
                fullWidth
                options={occasions}
                value={resOccasion}
                onChange={(_, val) => setFormState((prev) => ({ ...prev, resOccasion: val }))}
                renderInput={(params) => <TextField {...params} label="Occasion" variant="outlined" />}
              />
            </Stack>
            <TextField fullWidth multiline rows={3} label="Special Requests" variant="outlined"
              value={resNotes} onChange={update("resNotes")} placeholder="Dietary needs, seating preferences..." />
            <Button
              variant="contained" fullWidth size="large"
              onClick={() => showToast(resName ? `🎉 Booked for ${resName}! See you soon.` : "🎉 Table reserved! See you soon.")}
              sx={{ bgcolor: COLORS.indigo, "&:hover": { bgcolor: COLORS.violet }, py: 1.5, mt: 0.5, fontSize: "1rem", letterSpacing: "0.02em" }}
            >
              Confirm Reservation ✦
            </Button>
          </Stack>
        </Card>
      </Box>
    </SectionWrapper>
  );
}

export default Reservation;