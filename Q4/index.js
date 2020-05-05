/**
 * Create a rest API running on port 4000 using express framework in NodeJs which fetches data from
 * the following api "https://jsonplaceholder.typicode.com/todos" and has following two endpoints
 
 * GET /todos : returns all the data from the API
 * GET /todos/:id : returns todo for the specified id in route params
 */

const express = require('express');
const fetch = require('node-fetch')
const app = express();

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
const port = 4000;

app.get('/todos', async (req, res) => {
  try {
    const data = await fetch(baseUrl).then(result => result.json())
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(new Error(error));
  }
});

app.get('/todos/:id', async (req, res) => {
  try {
    const { params: { id } } = req;
    const data = await fetch(`${baseUrl}/${id}`).then(resposne => resposne.json());
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json(new Error(error));
  }
});

app.listen(port, () => {
  console.log(`Node Server is up at http://localhost:${port} port`);
})
