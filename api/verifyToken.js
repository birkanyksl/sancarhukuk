const jwt = require("jsonwebtoken");
const RefreshToken = require("./models/RefreshToken");


const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json("Access token not provided");
  }

  try {
    // İlk olarak accessToken'ı doğrula
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user; // Kullanıcıyı request'e ekleyin

    // Veritabanından refreshToken'i al
    const storedRefreshToken = await RefreshToken.findOne({ userId: user.id });

    if (!storedRefreshToken) {
      return res.status(403).json("Refresh token not found in database");
    }

    // Refresh token ile kullanıcıyı kontrol et
    if (storedRefreshToken.userId.toString() !== req.user.id) {
      return res.status(403).json("User mismatch between access token and refresh token");
    }

    // Her şey doğruysa, bir sonraki işleme geç
    next();
  } catch (err) {
    console.error("Token doğrulama hatası:", err);
    return res.status(403).json("Access token is not valid");
  }
};

module.exports = verifyToken;
