const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    getFortune,
    getColors,
    addColor,
    deleteColor,

} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/colors", getColors);
app.post("/api/colors", addColor);
app.delete("/api/colors/:id", deleteColor)

app.listen(4000, () => console.log("Server running on 4000"));
