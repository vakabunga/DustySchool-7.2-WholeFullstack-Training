const express = require('express');
const cors = require('cors');
const querystring = require('node:querystring');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  params = querystring.parse((String(req.url).slice(2)));

  const sum = +params.first + +params.second;

  res.json(String(sum));

  res.end();
})

app.listen(port, () => {
  console.log(`Сервер запущен и слушает порт ${port}`);
})
