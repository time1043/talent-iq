import path from "path";
import express from "express";
import { connectDB } from "./lib/mongodb.js";

const PORT = Number(process.env.PORT || 3000);
const { NODE_ENV } = process.env;
const __dirname = path.resolve();

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "API is up and running" });
});

app.get("/books", (req, res) => {
  res.status(200).json({ msg: "This is the books endpoint" });
});

// make our app ready for deployment
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server run: http://localhost:${PORT}`));
  } catch (error) {
    console.error("💥 Error starting the server");
  }
};

startServer();
