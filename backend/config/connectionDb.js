const connectionString = "mongodb+srv://user:user123@cluster0.ubb60cs.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(connectionString);
    console.log("database is connected  :) ");

  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDb;
