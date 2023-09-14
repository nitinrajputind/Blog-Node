const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");

const Home = require('./controller/RouteComp');

// config the env
dotenv.config()

// port come from env file
const PORT = process.env.PORT || 8080;

// rest object
const app = express();

// Cors
app.use(cors({
    origin : "*"
}))

// body parser
app.use(express.json());


// rest Api
app.get("/", Home)



app.listen(PORT,()=>{
    console.log(`Server is Runing at http://localhost:${PORT}`)
})