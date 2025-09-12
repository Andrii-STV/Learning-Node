import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;


function methodTeller(req, res, next) {
    console.log("We're calling this method: ", req.method);
    console.log("Requested URL: ", req.url);
    next();
}

app.use(methodTeller);
app.use(morgan("combined"));




app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});