const { initializeApp } = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const dotenv = require("dotenv");
const { v4: uuidv4 } = require("uuid");
const cookieParser = require('cookie-parser');
const emailRoutes = require('./routes/email');


dotenv.config();


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET, 
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};


const app2 = initializeApp(firebaseConfig);
const storage = getStorage(app2, process.env.FIREBASE_STORAGE_BUCKET); 

const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "https://sancarhukuk-client.vercel.app"], 
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log(err));


const upload = multer({
  storage: multer.memoryStorage(), 
  limits: { fileSize: 10 * 1024 * 1024 },
});


app.post("/api/upload", upload.single("file"), async (req, res) => {
  console.log(req.file)
  try {
    const file = req.file;
    if (!file) throw new Error("No file uploaded");


    const storageRef = ref(storage, `images/${uuidv4()}`); 
    await uploadBytes(storageRef, file.buffer, {
      contentType: file.mimetype || 'application/octet-stream',
    });

    const fileUrl = await getDownloadURL(storageRef);

    res.status(200).json(fileUrl);
  } catch (error) {
    console.error("Error uploading file:", error.message);
    res.status(500).json({ error: error.message || "Failed to upload file" });
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories", categoryRoute);
app.use('/api', emailRoutes);

app.listen(5000, () => {
  console.log("Backend is running");
});
