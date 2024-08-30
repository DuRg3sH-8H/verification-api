const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const corsOptions = {
  origin:
    "https://verification-client-git-main-durg3sh-8hs-projects.vercel.app/", 
  methods: "GET,POST",
  allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post("/verify", (req, res) => {
  const { code } = req.body;

  if (!code || code.length !== 6 || isNaN(code)) {
    return res.status(400).json({ error: "Invalid code" });
  }

  if (code.endsWith("7")) {
    return res.status(400).json({ error: "Verification Error" });
  }

  return res.status(200).json({ message: "Verification Successful" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
