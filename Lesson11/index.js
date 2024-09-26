const express = require("express");
const app = express();
const PORT = 3000;

// Corrected middleware function name and currentTime property
const myMiddleware = (req, res, next) => {
    console.log("This is my middleware");
    req.currentTime = new Date(Date.now());
    next();
}

// Use middleware for all routes
app.use(myMiddleware);

// Use app.get for specific routes
app.get("/", (req, res) => {
    console.log("This is from home " + req.currentTime);
    res.send("<h1>The man is dying in the rain</h1>");
});

app.get("/about", (req, res) => {
    console.log("This is from about " + req.currentTime);
    res.send("<h1>This is about</h1>");
});

app.get("/contact", (req, res) => {
    console.log("This is from contact " + req.currentTime);
    res.send("<h1>This is contact</h1>");
});


// 404 error page
app.use((req, res) => {
    res.status(404).send("<h1>This is Error page! 404</h1>");
});

// Corrected log message for the server URL
app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
