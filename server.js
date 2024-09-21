const express = require('express');
const cors = require('cors');
const citiesRouter = require('./routes/citiesRouter.js');
const usersRouter = require('./routes/users.router.js');

const app = express();

const PORT = 3200;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use(cors());

app.use(express.json());

app.use('/cities', citiesRouter);

app.use('/users', usersRouter);