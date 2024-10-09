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
dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET, 
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig);
const storage = getStorage(app2, process.env.FIREBASE_STORAGE_BUCKET); 

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

// Set up Multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(), 
});

// Upload route
app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
     

    // Create a reference to the file in Firebase Storage
    const storageRef = ref(storage, `images/${uuidv4()}`); 

    // Upload the file (use await to handle the promise)
    await uploadBytes(storageRef, file.buffer, {
      contentType: file.mimetype,
    });

    // Get the download URL
    const fileUrl = await getDownloadURL(storageRef);

    // Send back the file URL
    res.status(200).json(fileUrl);
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(5000, () => {
  console.log("Backend is running");
});
