const express = require('express');

const port = 3002;
const app = express();

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(port, () => console.log(`Auth server listening @ http://localhost:${port}`));
