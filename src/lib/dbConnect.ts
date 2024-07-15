import mongoose from "mongoose";
import { bootstrap } from "../bootstrap/bootstrap";

type TConnectionObject = {
  isConnected?: number;
};

const DB_URL = process.env.DATABASE_URL;
const DB_NAME = process.env.DATABASE_NAME;
const DB_OPTIONS = {
  dbName: DB_NAME,
};

const connection: TConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection?.isConnected) return;
  try {
    const db = await mongoose.connect(DB_URL || "", DB_OPTIONS);
    connection.isConnected = db.connections[0]?.readyState;
    bootstrap();
    console.log("Db is Connected....");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default dbConnect;
