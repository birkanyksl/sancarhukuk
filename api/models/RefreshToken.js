const mongoose = require("mongoose");

const RefreshTokenSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  token: { 
    type: String, 
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '7d' 
  },
}, { timestamps: true });

module.exports = mongoose.model("RefreshToken", RefreshTokenSchema);