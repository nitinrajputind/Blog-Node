const data = require("../data/data")

const Home = (req, res)=>{
    res.send(data);
}

module.exports = Home;