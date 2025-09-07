import express from "express";
const app = express();
const port = 3000;
const absolutePath = 'D:/Udemy Full-Stack Web Developer course/Learning Node/3.1 Express Server';

app.use(express.static('3.1 Express Server'));


app.get('/', (req, res) => {
    
    //res.send('Well, I guess I will find out how to send page right now');
    res.sendFile(absolutePath + '/index.html');
    // res.send("<h1>Lol it's not even a page, it's only an h1 html tag :)</h1>");
});

app.get('/about', (req, res) => {
    res.sendFile(absolutePath + '/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(absolutePath + '/contact.html');
});



app.listen(port, () => {
    console.log(`App listening port: ${port}`)
})