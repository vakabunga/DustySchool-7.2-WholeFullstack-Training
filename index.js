const express = require('express');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
