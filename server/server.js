const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT;

//


const url = process.env.URL;

const app = express();
const http = require('http').Server(app)
const socketIO = require("socket.io")(http, {
  cors: {
    origin: 'http://localhost:3000'
  }
})


app.use(express.json());
app.use(bodyParser.json());
app.use(cors())




// mongodb

async function connect() {
    try {  
      await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log(`Connected to mongodb`);
    } catch (error) {
      console.error(`Connection error: ${error}`);
    }
};

connect();

//


//

const userRoutes = require('./routes/routes')
app.use('/api/user', userRoutes);

//

socketIO.on("connection", (socket) => {
  console.log('User connected');
  socket.on("disconnect", () => {
    console.log('User disconnected')
  })
})


http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

