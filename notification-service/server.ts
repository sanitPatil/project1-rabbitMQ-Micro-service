import app from "./src/app";

import chalk from "chalk";

const PORT = process.env.PORT;
(() => {
  app.listen(PORT, () => {
    console.log(`notification-service start: hhtp://localhost:${PORT}`);
    console.log(chalk.bgBlueBright("🔔 notification server started"));
  });
})();
