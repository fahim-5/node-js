require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000; // Set default port in case env variable is missing

app.get("/", (req, res) => {
    res.send("Hello Fahim Faysal");
});

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
