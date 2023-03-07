require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const bodyparser = require('body-parser');
const Router = require('./routes/route');
//const { default: App } = require('../frontend/src/App');


connectDB();


app.use(express.json({ extended: false }));

app.use(cors());

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.use('/project',Router);






const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
