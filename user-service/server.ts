import app from "./src/app";
import { dbConnect } from "./src/db/dbConnect";

const PORT = process.env.PORT;

(async () => {
  try {
    await dbConnect();
    app.listen(PORT, () =>
      console.log(`✅ server start: http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`❌ Server failed to start!`);
    process.exit(1);
  }
})();
