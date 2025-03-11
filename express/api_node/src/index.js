import express from "express";
import userRouter from "./routes/user.route.js"

const app = express();

app.use(express.json())

app.use("/api/user", userRouter)

app.listen(3002, () => {
    console.log('🚀 Serveur démarré ');
}); 