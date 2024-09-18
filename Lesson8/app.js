const express = require("express");
const app = express();
const userRouter = require("./routes/route.user");

app.use(userRouter);



app.use("/" , (req, res) => {
    res.send("<h1>This is home page</h1>");
  });
  
      

app.use((req, res) => {
  res.send("<h1>This is Error page! 404 </h1>");
});

module.exports = app;
