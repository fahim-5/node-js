const PORT=3000;
const app=require("./app")


app.listen(PORT, ()=>{
    console.log(`The server is ruunig at http//:localhost:${PORT}`);
});

