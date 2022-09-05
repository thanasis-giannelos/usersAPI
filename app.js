const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./usersRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});