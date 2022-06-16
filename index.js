const app =require("./app")
const {connectdb} = require("./db")
const userRouter = require("./router/user")

const port = process.env.NODE_PORT || 8080

app.use("/api/v1/user",userRouter)

app.listen(port,async()=>{
    await connectdb()
    console.log("server is listening to ",port);
})