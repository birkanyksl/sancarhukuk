
// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

//   if (!token) {
//     return res.status(401).json("Token not provided");
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json("Token is not valid");
//     }

//     req.user = user; 
//     next(); 
//   });
// };

// module.exports = verifyToken;


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

    // Cookie'den refreshToken'i alıyoruz
    const refreshToken = req.cookies.refreshToken; 
    console.log("Refresh token2-3:", refreshToken); // Debug için ekledik

    if (!refreshToken) {
      return res.status(401).json("Refresh token not provided");
    }

    // Veritabanından refreshToken'i kontrol et
    const storedRefreshToken = await RefreshToken.findOne({ token: refreshToken });
    if (!storedRefreshToken) {
      return res.status(403).json("Invalid refresh token");
    }

    // Refresh token'ın userId'sini accessToken'dan gelen userId ile eşleştir
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
