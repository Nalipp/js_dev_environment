import express from 'express';
import path from 'path';
// import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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

