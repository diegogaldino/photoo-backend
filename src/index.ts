import{app}from  "./routes/app"
import { userRouter } from "./routes/userRouter"

app.use("/user",userRouter)