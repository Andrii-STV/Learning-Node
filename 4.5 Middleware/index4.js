import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "";

app.use(bodyParser.urlencoded({ extended:true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

function randomBandGenerator(req, res, next) {
    console.log(req.body);
    bandName = req.body['street'] + req.body['pet'];
    next();
};

app.use(randomBandGenerator);


app.post("/submit", (req, res) => {
    // res.send(`<h1>Band Name Generated</h1><h2>Your band name is: ${req.body["street"] + req.body["pet"]}</h2>`);

    res.send(`<h1>Band Name Generated</h1><h2>Your band name is: ${bandName}</h2>`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});