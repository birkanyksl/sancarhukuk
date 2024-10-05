const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")
const path = require("path")



const dotenv = require("dotenv")

dotenv.config()
app.use(cors());
app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images")))


mongoose.connect(process.env.MONGO_URL).then(console.log("connected to MongoDB")).catch(err => console.log(err))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images"); 
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); 
    }
  });

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  const fileUrl = `http://localhost:5000/images/${req.file.filename}`
  res.status(200).json(fileUrl);
});

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",categoryRoute)

app.listen("5000",()=>{
    console.log("Backend is running");
    
})