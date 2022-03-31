const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get("/", (req, res) => res.send("don pablo"))

app.post("/", (req, res) => {
    if(Object.keys(req.body).length > 0){
        res.json({
            received: req.body
        })
    } else {
        res.send("got the post!")
    }
})

app.get('/auth-endpoint', (req, res) => {
    if(req.headers.authorization && req.headers.authorization == 'my-api-key-123') {
        res.send("authorized!")
    } else {
        res.status(401).send();
    }
})

app.listen(9000);

const app2 = express();
app2.use(bodyParser.json());
app2.get("/", (req, res) => res.send("hello from the other environment!"))
app2.listen(9090);