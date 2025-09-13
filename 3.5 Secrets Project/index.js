import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var userAuthorised = false;

app.use(bodyParser.urlencoded({ extended:true }));


function authoriseUser(req, res, next) {
    const pass = req.body["password"];
    if (pass === "qwe456") {
        userAuthorised = true;
    }

    next();
};

app.use(authoriseUser);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
    if (userAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});