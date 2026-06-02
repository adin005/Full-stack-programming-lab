// ── Start Server ────────────────────────────────────────────
require("dotenv").config();

const app = require("./app");


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("=========================================");
  console.log(`  Weather Forecast API running on port ${PORT}`);
  console.log(`  Base URL : http://localhost:${PORT}`);
  console.log(`  Test URL : http://localhost:${PORT}/api/weather/Karachi`);
  console.log("=========================================");
});


