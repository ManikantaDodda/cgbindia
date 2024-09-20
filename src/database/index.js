import mongoose from "mongoose";

const configOptions = {
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const atlasDB = process.env.DATABASE_URL;
  const connectionUrl =
    "mongodb://localhost:27017/cgbindia";

  mongoose
    .connect(atlasDB, configOptions)
    .then(() => console.log("database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
