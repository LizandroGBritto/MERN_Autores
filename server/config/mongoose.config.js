const mongoose = require('mongoose');
const db_name = "autores_db";

mongoose.connect(`mongodb://localhost/${db_name}`)
    .then(() => console.log(`Successfully connected to ${db_name}`))
    .catch((err) => console.log(`mongoose connection to ${db_name} failed:`, err));