const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')
const categorieRouter = require("./route/categorie.route")
const scategorieRouter = require("./route/scategorie.route")
const articleRouter = require ("./route/article.route")

dotenv.config()  // bch yefhem heki el process .env.port wala ay process.env
const app = express();
app.use(express.json());

mongoose.set('strictQuery', true)
const connect = async () => {
    try {
    await mongoose.connect(process.env.DATABASECLOUD);
    console.log("Connected to mongoDB.");
    } catch (error) {
    throw error;
    }
    };
    mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
    });
    app.get("/",(req,res)=>{
    res.send("bonjour");
    });
    app.use("/api/categories", categorieRouter)
    app.use("/api/scategories", scategorieRouter)
    app.use("/api/articles", articleRouter);
    app.listen(process.env.PORT, () => {
        connect();
    console.log(`Server is listening on port ${process.env.PORT}`); });