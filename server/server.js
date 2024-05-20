const {PORT} = require('./config/settings');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config");
const AutorRouter = require("./routes/autores.route");
app.use("/api/autor", AutorRouter);


app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); } );