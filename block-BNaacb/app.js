var express = require('express');

var mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost/sample",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        console.log(err ? err : "connected true");
    }
)

var app = express();

app.get('/', (req, res) => {
    res.send('welcome');
});

app.listen(3000, () => {
    console.log('server listning on port 3k')
})