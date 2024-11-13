const mongoose = require("mongoose");
const link = "mongodb://localhost:27017/task35";

const mongoConnect = async () => {
  try {
    await mongoose.connect(link);
    console.log("db is connected");
  } catch (err) {
    console.log("this is error", err);
  }
};



module.exports = mongoConnect
