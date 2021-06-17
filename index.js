let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log("서버 열림!");
});