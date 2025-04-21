/* eslint-env node */

import routes from "./routes/routes.js";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use('/api', routes);

const PORT = parseInt(process.env.PORT, 10) || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
