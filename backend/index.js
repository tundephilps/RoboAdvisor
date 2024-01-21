import express from "express";
import http from "http";
import cors from "cors";
import mongoose from 'mongoose';
import allDataModel from "./model/AllData.mjs";

const app=express();
const httpServer=http.Server(app);
const PORT=5000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());


let url = "mongodb://127.0.0.1:27017/slider";
mongoose.connect(url).then(() => {
    console.log("Database connected")
});

app.get("/api/getdata", async (req, res) => {
    const allData=await allDataModel.findOne({}).exec();

    res.json({
        status : "success",
        message : "Data fetched",
        data : allData.datas
    })
})

httpServer.listen(PORT, () => {
    console.log("listening on port: " + PORT)
})