require("dotenv").config();
require("./model/database");
const express = require("express");
const multer = require("multer");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const merchantRoutes = require("./controller/routes/merchantRoutes");
const pendingItemRoutes = require("./controller/routes/pendingItemsRoutes");
const customerRoutes = require("./controller/routes/customerRoutes");
const adminRoutes = require("./controller/routes/adminRoutes");
const ItemRoutes = require("./controller/routes/itemsRoutes");
var logger = require("morgan");
var fs = require("fs");
const path = require("path");

fs.readdir(process.env.UPLOAD_PATH, (err, files) => {
  if (err)
    fs.mkdir(path.join(__dirname, "uploads"), (err) => {
      if (err) {
        return console.error(err);
      }
      console.log("Directory created successfully!");
    });
  else {
    console.log("\nUploads Directory exits");
  }
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.UPLOAD_PATH);
  },
  filename: function (req, file, cb) {
    let fileName = file.fieldname + "-" + Date.now() + file.originalname;
    cb(null, fileName);
  },
});
const upload = multer({ storage });
var cpUpload = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "image_files", maxCount: 6 },
]);
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();
app.use(cpUpload);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(merchantRoutes);
app.use(pendingItemRoutes);
app.use(adminRoutes);
app.use(customerRoutes);
app.use(ItemRoutes);

let port = process.env.PORT || 3000;

io.on("connect", (socket) => {
  console.log("new client connected");
  socket.emit("now", {
    message: "marzz",
  });

  socket.emit("marzz", {
    maroh: "Maroh",
  });
});
let productionPath = path.join(__dirname, "build");
let developmentPath = path.join(__dirname, "public");

if (process.env.NODE_ENV === "Production") {
  app.use(express.static(productionPath));
  app.get("*", (req, res) => {
    res.sendFile(productionPath, "index.html");
  });
} else {
  app.use(express.static(developmentPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(developmentPath, "index.html"));
  });
}

console.log(process.env.NODE_ENV);
try {
  app.listen(port, () => console.log(`server up at ${port}`));
} catch (error) {
  console.log("server already up");
}
