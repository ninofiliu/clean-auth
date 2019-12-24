const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const port = 3002;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));
app.post('/signup', routes.signup);

app.listen(port, () => console.log(`Auth server listening @ http://localhost:${port}`));
