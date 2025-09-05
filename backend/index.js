import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/database/index.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;
connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
