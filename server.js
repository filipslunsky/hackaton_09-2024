const express = require('express');
const cors = require('cors');
const path = require('path');
const citiesRouter = require('./routes/citiesRouter.js');
const usersRouter = require('./routes/users.router.js');

const app = express();
const PORT = 3200;


app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use('/cities', citiesRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
