import express from "express";
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    //res.send('Well, I guess I will find out how to send page right now');
    res.sendFile('D:/Udemy Full-Stack Web Developer course/Learning Node/3.1 Express Server/index.html');
});

app.listen(port, () => {
    console.log(`App listening port: ${port}`)
})