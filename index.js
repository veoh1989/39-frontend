'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static(`${__dirname}/build`));
app.use(cors({
  origin: 'https://lab39-backend.herokuapp.com',
}));

app.get('*',(request,response) => {
  response.sendFile(`${__dirname}/build/index.html`);
});

app.listen(process.env.PORT,() => {
  console.log('__SERVER_UP__',process.env.PORT);
});