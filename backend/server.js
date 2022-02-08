const express = require("express");
const mongoose = require("mongoose");

const app = express();
const morgan = require("morgan");
const cors = require("cors");

mongoose.connect(
  "mongodb://localhost:27017/nuxtblog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Database Connected");
    } else {
      console.log("Error" + err);
    }
  }
);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/blog.routes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
