import expess from "express";
import "dotenv/config";
import cors from "cors";

const app = expess();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});