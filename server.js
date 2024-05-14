const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const calculatorRouter = require('./routes/calculator');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

// View engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Use calculator router
app.use('/calculate', calculatorRouter);

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
