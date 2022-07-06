const app =require("./app")
const {connectdb} = require("./db")
const userRouter = require("./router/user")
const dataRouter = require("./router/data")
const awsRouter = require("./router/aws")
const testmulter = require("./router/multer")

const port = process.env.NODE_PORT || 8080

app.use("/api/v1/user",userRouter)
app.use("/api/v1/data",dataRouter)
app.use("/api/v1/aws",awsRouter)
app.use("/api/v1/multer",testmulter)

app.listen(port,async()=>{
    await connectdb()
    console.log("server is listening to ",port);
}) 

app.use((err, req, res, next) => {
    console.error(err.stack);
    const message = err.message || "Unknown Error";
    res.status(500).json({
      message,
      stack: err.stack,
    });
  }); 