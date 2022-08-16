const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
var cors = require('cors')

app.use(cors())



// Routes links
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const organizationInfoRoute = require("./routes/organizationInfos");
const stakeholderRoute = require("./routes/stakeholders");
const disruptionRoute = require("./routes/disruptions");


dotenv.config();
app.use(express.json());
// app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/organizationInfos", organizationInfoRoute);
app.use("/api/stakeholders", stakeholderRoute);
app.use("/api/disruptions", disruptionRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});