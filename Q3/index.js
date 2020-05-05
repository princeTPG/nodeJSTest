/**
 * Create a server running on port 4000 using express framework in nodejs and use 'ejs' templating engine.
 * The server should return "Hello World" from the template.
 */
const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home-page');
});

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port} port`);
})
