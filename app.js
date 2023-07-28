const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");
const config = require("./config/config.json")["development"];
const morgan = require("morgan");

const AppRouter = require("./routes/AppRouter");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const connectToPostgres = () => {
  const sequelize = new Sequelize(config);
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
const postgresClient = connectToPostgres();
config.client = postgresClient;

app.get("/", (req, res) => res.json({ message: "Server Works" }));
app.use("/api", AppRouter);

app.listen(PORT, () =>
  console.log(`Application is listening on port ${PORT}.`)
);
