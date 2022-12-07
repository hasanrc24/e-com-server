const mongoose = require("mongoose");

uri =
  "mongodb+srv://e-com:wPcn9pfGdUboOk34@cluster0.xflbu.mongodb.net/e-com?retryWrites=true&w=majority";

const connectDB = () => {
  console.log("DB");
  return mongoose.mongoose.set("strictQuery", false).connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
