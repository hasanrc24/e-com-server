const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log(uri);
  mongoose.set("strictQuery", false);
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
