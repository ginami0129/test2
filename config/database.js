import mongoose from "mongoose";

const connectedDB = async () => {
  try {
    console.log("DB connecting");
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default connectedDB;
