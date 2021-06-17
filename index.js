let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.use(express.json())

app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.render(`index`);
});

app.get('/test', (req, res) => {
    res.render(`test`);
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});


app.listen(3000, () => {
    console.log("서버 열림!");
});