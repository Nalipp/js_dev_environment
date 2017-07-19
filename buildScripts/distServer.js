import express from 'express';
import path from 'path';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {"id": "1", "firstName": "nate", "lastName": "lip", "email": "m@m.c"},
    {"id": "2", "firstName": "dale", "lastName": "seo", "email": "m@m.c"},
    {"id": "3", "firstName": "ben", "lastName": "sdck", "email": "m@m.c"}
  ]);
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('up and running on : ' + port);
});

