
require("dotenv").config();

const app = require("./app");

// ── Start Server ────────────────────────────────────────────
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log("=========================================");
  console.log(`  News Headlines API running on port ${PORT}`);
  console.log(`  Base URL  : http://localhost:${PORT}`);
  console.log(`  Test URL  : http://localhost:${PORT}/api/news/pk`);
  console.log(`  US News   : http://localhost:${PORT}/api/news/us`);
  console.log(`  Search    : http://localhost:${PORT}/api/news/search/cricket`);
  console.log("=========================================");
});
