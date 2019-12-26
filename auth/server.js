const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));
app.post('/signup', routes.signup);
app.post('/signin', routes.signin);
app.get('/signout', routes.signout);

const hostname = 'auth.clean-auth.demo';
app.listen(80, hostname, () => console.log(`Auth server listening at http://${hostname}`));
