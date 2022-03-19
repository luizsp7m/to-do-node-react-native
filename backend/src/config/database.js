require("dotenv/config");

const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@burningheart.zuqii.mongodb.net/to-do-app?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Mongoose is connected");
});

module.exports = mongoose;