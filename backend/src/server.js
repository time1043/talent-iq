import express from "express";

const PORT = Number(process.env.PORT || 3000);

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "API is up and running" });
});

app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
