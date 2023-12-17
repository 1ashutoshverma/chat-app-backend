const express = require("express");
    const cors = require("cors");
    const { connection } = require("./configs/db");
    
    const app = express();
    const PORT = process.env.PORT || 8080;
    app.use(cors());
    app.use(express.json());
    
    app.get("/", (req, res) => {
      res.json({ message: "server is running" });
    });
    
    app.listen(PORT, async () => {
      try {
        await connection;
        console.log("DB is connected");
      } catch (error) {
        console.log("Error while connection to db");
        console.log(error);
      }
      console.log("server is running");
    });
