import app from "./app.js";
process.env.PORT=4000;
app.listen(process.env.PORT, ()=>{
    console.log(`Server has running at port ${process.env.PORT}`);
})
