import mongoose from "mongoose";
import env from "../config/env";

const connectMongodb = async () => {
  try {
    await mongoose.connect(env.mongo_uri);
  } catch (err) {
    console.log(err);
  }
};
