// IMPORT PACKAGES
const express = require('express');
const app = express();
const cors = require('cors')
port = 8000

// CONFIG MONGOOSE
require("./config/mongoose.config");

// CONFIG EXPRESS
app.use(cors()) // Having 2 localhost port to communicate
app.use(express.json(), express.urlencoded({ extended: true }))  // POST METHOD

// ROUTES
require("./routes/pet.routes")(app)

// PORT
app.listen(8000, () => console.log(`Listening on port: ${port}`));