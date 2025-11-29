import "dotenv/config";
import app from "./src/app";
import { dbConnect } from "./src/db/dbConnect";

const PORT = process.env.PORT;
(async () => {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`✅ task server start: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`❌ server failed to start!`);
    process.exit(1);
  }
})();
